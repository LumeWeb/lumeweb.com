import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom/server'
import App from "../src/App"

const compression = require('compression')
const app = express();

app.use(compression('^/$', (req, res) => {
    fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
        console.log (err, data)
        if (err) {
            console.err(err)
            return res.status(500).send('An error has occurred.')
        }
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        );
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
    })
}));

app.use(express.static(path.resolve(__dirname, "..", "dist")))

app.listen(4321, () => {
    console.log("App launched");
});