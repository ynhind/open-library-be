const debug = require('debug')('order:server');
const app = require('./app');
const { PORT } = require('./config');


const StartServer = async () => {
    app.listen(PORT, () => {
        debug(`Server listening on port ${PORT}`);
    }).on('error', (err) => {
        debug(err);
        process.exit();
    });
};

StartServer();