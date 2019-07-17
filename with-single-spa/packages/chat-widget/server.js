/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || 3001);

const securityHeaders = () => (req, res, next) => {
  res.header('Strict-Transport-Security', 7776000000);
  res.header('X-Frame-Options', 'DENY');
  res.header('X-XSS-Protection', 0);
  res.header('X-Content-Type-Options', 'nosniff');
  next();
};

const cors = () => (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(securityHeaders());
app.use(cors());

// Only environment variables with `REACT_APP_RUNTIME` prefix can be included.
const REACT_APP_RUNTIME = /^REACT_APP_RUNTIME_/i;

function getEnv() {
  const raw = Object.keys(process.env)
    .filter(key => REACT_APP_RUNTIME.test(key))
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {});

  return raw;
}

app.get('/runtime-envs.js', (req, res) => {
  const env = getEnv();
  const response = `window.__KATA_RUNTIME__=${JSON.stringify(env)};`;
  res.setHeader('content-type', 'application/javascript');
  res.end(response);
});

app.use(express.static(path.join(process.cwd(), 'dist')));

app.listen(port, () => {
  console.log(`> Server running at http://localhost:${port}/`);
});
