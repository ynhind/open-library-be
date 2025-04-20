const router = require('express').Router();
const { postLogin, postRegister } = require('../controllers/auth.controller');

router.route('/register')
    .post(postRegister);

router.route('/login')
    .post(postLogin);

router.post('/test', (req, res) => {
    console.log('req.body:', req.body);
    res.json({ body: req.body });
});

module.exports = router;