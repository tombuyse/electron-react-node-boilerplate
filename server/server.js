import appModulePath from 'app-module-path';

appModulePath.addPath(`${__dirname}`);

console.log('start server');
const Api = require('express')();
const HTTP = require('http').Server(Api);
const Cors = require('cors');

Api.use(Cors());

Api.get('/test', (req, res) => res.status(200).send('success!'));

HTTP.listen(9001, () => {
    console.log('listening on *:9001');
});

