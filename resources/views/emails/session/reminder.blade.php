@component('mail::message')
<!-- # Introduction

Session 4 Done!!!!! Yeah!!!!!!!!!
Need to have some more links, which is www.google.com

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }} -->
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Add your custom styles here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: 0 auto;
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
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            Reminder Done!
        </div>
        <div class="content">
            Please go to <a href="http://127.0.0.1:8000/dashboard">Dashboard</a>.
        </div>
        <a href="" class="button">Button Text</a>
        <div class="signature">
            Thanks, {{ config('app.name') }}
        </div>
    </div>
</body>
</html>
@endcomponent
