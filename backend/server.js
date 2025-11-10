// ====== Imports ======
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ====== MongoDB Connection ======
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// ====== Schemas ======
const replySchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  replies: [replySchema],
});

const Message = mongoose.model("Message", messageSchema);

// ====== Express App Setup ======
const app = express();
app.use(cors());
app.use(express.json());

// ====== Test Route ======
app.get("/", (req, res) => {
  res.send("Portfolio Backend Server is Running...");
});

// ====== Contact Route ======
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message)
      return res.status(400).json({ error: "All fields are required" });

    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ====== Get All Messages ======
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error("Fetch messages error:", error);
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
});

// ====== Reply to a Message ======
app.post("/api/messages/:id/reply", async (req, res) => {
  try {
    const { id } = req.params;
    const { from, to, message } = req.body;
    if (!from || !to || !message)
      return res.status(400).json({ error: "All fields are required" });

    // ====== Nodemailer Setup ======
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from,
      to,
      subject: "Reply from Portfolio Admin",
      text: message,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Reply sent to ${to}`);

    // Save reply in database
    const reply = { from, to, message };
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { $push: { replies: reply } },
      { new: true }
    );

    if (!updatedMessage)
      return res.status(404).json({ error: "Message not found" });

    res.status(200).json({ message: "Reply sent successfully!", updatedMessage });
  } catch (error) {
    console.error("Reply error:", error);
    res.status(500).json({ error: "Failed to send reply" });
  }
});

// ====== Delete a Message ======
app.delete("/api/messages/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage)
      return res.status(404).json({ error: "Message not found" });

    res.status(200).json({ message: "Message deleted successfully!" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete message" });
  }
});

// ====== Server Start ======
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
