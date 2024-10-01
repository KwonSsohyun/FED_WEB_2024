import express from 'express';
import fs from 'fs';
import ssr from './dist/server/ssr.js';

const app = express();

app.use('/', express.static('dist/client'));
app.use('/app', (req, res) => {
    const { html } = ssr();

    const index = fs.readFileSync('./dist/client/index.html');
    const result = `${index}`.replace('<!-- root-container -->', html);    

    res.setHeader('Content-Type', 'text/html').send(result);
});

app.listen(9999);