const dotEnv = require("dotenv");

if(process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({path: configFile.trim()});
} else {
    dotEnv.config({path: './.env' });
}

module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_TTL: process.env.JWT_TTL,
    GMAIL_HOST: process.env.GMAIL_HOST,
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,
    EMAIL_TO: process.env.EMAIL_TO,
    EMAIL_CC: process.env.EMAIL_CC,
    EMAIL_BCC: process.env.EMAIL_BCC,
};