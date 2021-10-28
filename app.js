const express = require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const path = require('path');
const port = 5015;
const liveReloadServer = livereload.createServer();

app.use(connectLivereload());
liveReloadServer.watch(path.join(__dirname, 'public'));

app.use(express.static('./public'))

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});