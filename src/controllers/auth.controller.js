const debug = require('debug')('order:authController');
const { User } = require("../models");
const {
    createError, 
    BAD_REQUEST,
    UNAUTHORIZED,
    NOT_FOUND,
    CONFLICT
} = require("../helpers/error_helper");

const postRegister = async (req, res, next) => {
    console.log('req.body:', req.body); // Debug
    const props = req.body.user;

    if (!props.email || !props.password || !props.first_name || !props.last_name || !props.role) {
        return next(createError({
            status: BAD_REQUEST,
            message: 'email, password, name and role are required field',
        }));
    }

    try {
        let user = await User.findOne({email: props.email});
        if(user){
            return next(createError({
                status: CONFLICT,
                message: 'Username already exist',
            }));
        }
        user = await User.create(props);
        res.json({
            ok: true,
            message: 'Registration Successful',
            user,
        });
    } catch (error) {
        next(error);
    }
};

const postLogin = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return next(createError({
            status: BAD_REQUEST,
            message: 'Email and password required field',
        }));
    }

    try {
        const user = await User.verify(email.trim(), password);
        if(!user) {
            return next(createError({
                status: NOT_FOUND,
                message: 'User not found',
            }));
        }
        return res.json({
            ok: true,
            message: 'Login successful',
            token: user.token,
        })
    } catch (error) {
        next(createError({
            status: UNAUTHORIZED,
            message: error,
        }));
    }
};

module.exports = {
    postLogin,
    postRegister,
};