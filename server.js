import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, query } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !query) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'rajeevnewton@gmail.com',
      pass: 'rgxg fkmp aymu hchm' // App password
    }
  });

  // Email content
  const mailOptions = {
    from: 'rajeevnewton@gmail.com',
    to: 'rajeevnewton@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #00ffff 0%, #ffd700 100%);
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #0a0e27;
            font-size: 24px;
            font-weight: bold;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #00ffff;
          }
          .field-label {
            font-weight: bold;
            color: #667eea;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }
          .field-value {
            color: #333;
            font-size: 16px;
            word-wrap: break-word;
          }
          .message-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #ffd700;
            margin-top: 20px;
          }
          .footer {
            background: #0a0e27;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🤖 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p style="font-size: 16px; color: #666; margin-bottom: 25px;">
              You have received a new message from your website contact form:
            </p>
            
            <div class="field">
              <div class="field-label">👤 Full Name</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">📧 Email Address</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #667eea;">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="field-label">📱 Phone Number</div>
              <div class="field-value"><a href="tel:${phone}" style="color: #667eea;">${phone}</a></div>
            </div>
            
            <div class="message-box">
              <div class="field-label">💬 Message</div>
              <div class="field-value" style="margin-top: 10px; white-space: pre-wrap;">${query}</div>
            </div>
          </div>
          <div class="footer">
            <p style="margin: 0;">FAA Robotics - Futurize. Activate. Assemble.</p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #999;">
              This email was sent from your website contact form
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${query}

---
FAA Robotics - Futurize. Activate. Assemble.
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      message: 'Email sent successfully',
      success: true 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
