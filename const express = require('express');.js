const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// POST endpoint to send an email
app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    // Check if all required fields are provided
    if (!to || !subject || !text) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail'
        auth: {
            user: 'ajithkumar@newgendigital.com', // Your email
            pass: 'uroqpjoiixmnrxxb', // Your email password or app-specific password
        },
    });

    // Email options
    const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Email API running on http://localhost:${port}`);
});
