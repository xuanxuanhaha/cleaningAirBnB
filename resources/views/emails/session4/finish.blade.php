<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Session 4 Finish</title>
    <style>
        /* Add your custom styles here */
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #555;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background: #ffffff;
            border: 1px solid #dddddd;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .content {
            font-size: 18px;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
            color: #fff;
            background-color: #007BFF;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .signature {
            font-size: 14px;
            color: #888;
        }
        .logo {
            display: block;
            margin: 0 auto 20px auto; /* Added bottom margin */
            width: 150px; /* You can adjust the size */
        }
        h1 {
            color: #333;
            text-align: center;
            margin-top: 0;
        }
        p {
            font-size: 16px; /* Adjust as needed */
            line-height: 1.5;
            margin-bottom: 10px;
            color: #666; /* Slightly softer color */
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="http://35.182.37.175/images/cleaning_logo.png" alt="Website Logo" class="logo">
        <h1>Session 4 Finish</h1>
        <p>Dear {{ $user->email }},</p>
        <p class="content">
            Congratulations on completing Session 4! Please go to <a href="https://www.epochconverter.com/">Other Links</a>.
    </p>
        <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
        <p>Best regards,</p>
        <p>Your Website Team</p>
        <div class="footer">
            <p>&copy; {{ date('Y') }} Your Website. All rights reserved.</p>
        </div>
    </div>
</body>
</html>