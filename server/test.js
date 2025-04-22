const { sendConfirmationMail } = require('./src/utils/email');

(async () => {
  try {
    await sendConfirmationMail(token, name, email);
  } catch (err) {
    console.error('Failed to send email:', err.message);
  }
})();
