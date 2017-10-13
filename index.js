'use strict';

const PORT = 80;

const express = require('express');
const path = require('path');
const app = express();
app.use('/', express.static(path.resolve(__dirname, 'public')));

app.route('/api/ping')
    .get((req, res, next) => {
        return res.send({
            'response': 'pong'
        });
    });

app.listen(PORT, () => {
    console.log(`App is now listening on port: ${PORT}`);
});
