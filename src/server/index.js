import 'babel-polyfill';
import '@env';

import { configure } from '@store';
import express from 'express';
import bodyParser from 'body-parser'
import App from '@client/App';
import template from './template';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router";

const contacts = require("./routes/api/contacts");
const proposals = require("./routes/api/proposals");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use("/api/contacts", contacts);
app.use("/api/proposals", proposals);

app.use(express.static('build/public'));

const initialState = {}
const store = configure(initialState);

app.get('*', (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const preloadedState = store.getState();

  res.status(200).send(template({ content, state: preloadedState }))
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});