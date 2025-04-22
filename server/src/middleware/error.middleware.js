const {
    BAD_REQUEST,
    CONFLICT,
    FORBIDDEN,
    GENERAL_ERROR,
    NOT_FOUND,
    UNAUTHORIZED,
    UNPROCESSABLE,
} = require('../helpers/error_helper');

const unauthorized = (err, req, res, next) => {
    if(err.status !== UNAUTHORIZED) return next(err);

    res.status(UNAUTHORIZED).send({
        ok: false,
        message: err.message || 'Unauthorized',
        errors: [err],
    });
};

const forbidden = (err, req, res, next) => {
    if(err.status !== FORBIDDEN) return next(err);

    res.status(FORBIDDEN).send({
        ok: false,
        message: err.message || 'Forbidden',
        errors: [err],
    });
};

const conflict = (err, req, res, next) => {
    if(err.status !== CONFLICT) return next(err);

    res.status(CONFLICT).send({
        ok: false,
        message: err.message || 'Conflict',
        errors: [err],
    });
};

const badRequest = (err, req, res, next) => {
    if(err.status !== BAD_REQUEST) return next(err);

    res.status(BAD_REQUEST).send({
        ok: false,
        message: err.message || 'Bad Request',
        errors: [err],
    });
};

//If there nothing left to do after all this (i.e. there's no error)
//Return 404 error
const notFound = (err, req, res, next) => {
    if(err.status !== NOT_FOUND) return next(err);

    res.status(NOT_FOUND).send({
        ok: false,
        message: err.message || 'The requested resource could not be found',
    });
};

//If there is still an error at this point return generic 500 error
const genericError = (err, req, res, next) => {
    if(err.status !== GENERAL_ERROR) return next(err);

    res.status(GENERAL_ERROR).send({
        ok: false,
        message: err.message || 'Internal Server Error',
        errors: [err],
    });
};

//If there nothing left to do after all these
//Return a 404 error
const catchAll = (err, req, res, next) => {
    res.status(NOT_FOUND).send({
        ok: false,
        message: err.message || 'The requested resource could not be found',
    });
};

const exportTable = {
    unauthorized,
    badRequest,
    notFound,
    genericError,
    conflict,
    forbidden,
    catchAll,
}

//All exportable stored as an array so that we can include in express middleware by app.use()
const all = Object.keys(exportTable).map((key) => exportTable[key]);

module.exports = {
    ...exportTable,
    all,
};