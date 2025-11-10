# Security group to allow SSH, HTTP, and MongoDB
resource "aws_security_group" "portfolio_sg" {
  name        = "portfolio-sg"
  description = "Allow SSH, HTTP, and MongoDB"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.public_ip]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "MongoDB"
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 instance for Docker
resource "aws_instance" "portfolio_instance" {
  ami                    = "ami-0c02fb55956c7d316" # Ubuntu 24.04 (change if needed)
  instance_type           = var.instance_type
  key_name                = var.key_name
  vpc_security_group_ids  = [aws_security_group.portfolio_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              apt-get update -y
              apt-get install -y docker.io docker-compose git
              systemctl enable docker
              systemctl start docker

              # Clone your repo
              cd /home/ubuntu
              git clone https://github.com/Hirushiviranga/Devops-Engineering-project.git
              cd Devops-Engineering-project

              # Start Docker Compose
              docker-compose up -d
              EOF

  tags = {
    Name = "Portfolio-Server"
  }
}
