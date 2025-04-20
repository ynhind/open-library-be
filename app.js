const express = require("express");
const app = express();
const cors = require('cors');
//middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', require('./src/routes/auth.route'));
app.use(require('./src/middleware/error.middleware').all);

module.exports = app;

//test1
