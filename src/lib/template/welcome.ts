export const contactEmailTemplate = (
  name: string,
  email: string,
  message: string
) => `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background-color: #f2f4f7;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
  
      .email-container {
        max-width: 650px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
  
      .header {
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        padding: 30px 20px;
        text-align: center;
        color: #ffffff;
      }
  
      .header h1 {
        margin: 0;
        font-size: 26px;
        font-weight: 600;
      }
  
      .content {
        padding: 25px 40px;
        color: #333;
        line-height: 1.6;
      }
  
      .content h2 {
        margin-top: 0;
        color: #764ba2;
        font-size: 22px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }
  
      .content p {
        font-size: 16px;
        margin: 10px 0;
      }
  
      .content p strong {
        font-weight: 600;
        color: #333;
      }
  
      .message-box {
        background-color: #f9f9f9;
        border-left: 4px solid #764ba2;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
        font-style: italic;
        color: #555;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
      }
  
      .message-box p {
        margin: 0;
        white-space: pre-line; /* Preserves line breaks in the message */
      }
  
      .footer {
        padding: 20px;
        background-color: #f4f4f7;
        text-align: center;
        font-size: 14px;
        color: #888;
      }
  
      .footer p {
        margin: 0;
      }
  
      @media (max-width: 600px) {
        .email-container {
          width: 100%;
        }
  
        .content {
          padding: 20px;
        }
  
        .header h1 {
          font-size: 22px;
        }
  
        .content h2 {
          font-size: 20px;
        }
  
        .message-box {
          padding: 15px;
        }
      }
    </style>
  </head>
  
  <body>
  
    <div class="email-container">
      <div class="header">
        <h1>New Message from Your Website</h1>
      </div>
      <div class="content">
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Message</h2>
        <div class="message-box">
          <p>${message}</p>
        </div>
      </div>
      <div class="footer">
        <p>© 2023 - Your Company Name. All rights reserved.</p>
      </div>
    </div>
  
  </body>
  
  </html>
  `;
