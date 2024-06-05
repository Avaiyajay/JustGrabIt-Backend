const verifyEmailTemplate = ({ firstName, token }) => {
  const verifyEmailUrl = `${process.env.SERVER_URL}/user/verify?token=${token}`;

  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                padding: 10px 0;
            }
            .header h1 {
                margin: 0;
                color: #333333;
            }
            .content {
                padding: 20px;
                color: #555555;
                line-height: 1.6;
            }
            .footer {
                text-align: center;
                padding: 10px;
                color: #999999;
                font-size: 12px;
            }
            .footer a {
                color: #999999;
                text-decoration: none;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                margin: 20px 0;
                background-color: #007BFF;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Your Company</h1>
            </div>
            <div class="content">
                <h2>Hello ${firstName},</h2>
                <p>Thank you for creating an account us. We sell best OG shoes in the market.</p>
                <p> 
            <a href=${verifyEmailUrl} style="
                display: inline-block;
                padding: 10px 20px;
                margin: 20px 0;
                background-color: #007BFF;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
                font-family: Arial, sans-serif;
                font-size: 16px;
                text-align: center;
            ">
                Click To Verify Email
            </a>
            </p>
                <p>If you have any questions, feel free to reply to this email or contact us at jayavaiya1605@gmail.com.</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 JustGrabIt. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>`;
};

export { verifyEmailTemplate };
