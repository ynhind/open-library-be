const nodemailer = require('nodemailer');

const { GMAIL_HOST, GMAIL_USER, GMAIL_PASS, EMAIL_TO, EMAIL_CC, EMAIL_BCC } = require('../../config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
});

const sendEmail = async (subject, text, html) => {
    const mailOptions = {
        from: GMAIL_USER,
        to: EMAIL_TO,
        cc: EMAIL_CC,
        bcc: EMAIL_BCC,
        subject,
        text,
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };