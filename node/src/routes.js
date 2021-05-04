const server = require('express').Router();

server.get('/', (_, res) => {
    return res.json({ message: 'Teste Ok'});
});

module.exports = server;