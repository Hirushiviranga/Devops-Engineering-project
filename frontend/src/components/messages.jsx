import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/style.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyData, setReplyData] = useState({
    from: "hirushiviranga89@gmail.com",
    to: "",
    message: "",
  });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/messages");
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const openReplyDialog = (msg) => {
    setSelectedMessage(msg);
    setReplyData({ ...replyData, to: msg.email, message: "" });
  };

  const handleSendReply = async () => {
    if (!replyData.message) return alert("Reply message cannot be empty");
    try {
      await axios.post(
        `http://localhost:5000/api/messages/${selectedMessage._id}/reply`,
        replyData
      );
      alert("Reply sent successfully!");
      setSelectedMessage(null);
      fetchMessages();
    } catch (error) {
      alert("Failed to send reply.");
      console.error(error.response || error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return alert("Invalid message ID");
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`http://localhost:5000/api/messages/${id}`);
        alert("Message deleted successfully!");
        fetchMessages();
      } catch (error) {
        alert("Failed to delete message.");
        console.error(error.response || error);
      }
    }
  };

  return (
    <section className="messages-section">
      <div className="container">
        <h2 className="text-center mb-4">Messages Received</h2>

        {messages.length === 0 ? (
          <p className="text-center">No messages yet.</p>
        ) : (
          <div className="messages-list">
            {messages.map((msg) => (
              <div key={msg._id} className="message-card">
                <h4>{msg.name}</h4>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Subject:</strong> {msg.subject}</p>
                <p><strong>Message:</strong> {msg.message}</p>
                <p className="time">{new Date(msg.createdAt).toLocaleString()}</p>

                {msg.replies && msg.replies.length > 0 && (
                  <div className="replies">
                    <h5>Replies:</h5>
                    {msg.replies.map((r, i) => (
                      <div key={i} className="reply">
                        <p><strong>From:</strong> {r.from}</p>
                        <p><strong>Message:</strong> {r.message}</p>
                        <p className="time">{new Date(r.createdAt).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}

                <button className="reply-btn" onClick={() => openReplyDialog(msg)}>
                  Reply
                </button>
                <button className="delete-btn" onClick={() => handleDelete(msg._id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedMessage && (
        <div className="reply-dialog">
          <div className="dialog-content">
            <h3>Send Reply</h3>
            <label>Send To:</label>
            <input type="email" value={replyData.to} readOnly />
            <label>From:</label>
            <input type="email" value={replyData.from} readOnly />
            <label>Message:</label>
            <textarea
              rows="4"
              value={replyData.message}
              onChange={(e) =>
                setReplyData({ ...replyData, message: e.target.value })
              }
              placeholder="Type your reply..."
            />
            <div className="dialog-actions">
              <button onClick={handleSendReply}>Send</button>
              <button onClick={() => setSelectedMessage(null)} className="cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Messages;
