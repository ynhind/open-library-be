const router = require('express').Router();
const { postLogin, postRegister, verifyEmail } = require('../controllers/auth.controller');

router.route('/register')
    .post(postRegister);

router.route('/login')
    .post(postLogin);

router.route('/email_verification')
    .post(verifyEmail);


module.exports = router;