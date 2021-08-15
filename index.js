const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', process.env.ORIGIN || '*');
//   next();
// });
app.use(express.json());

const requestLogger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:  ', req.path);
  console.log('Body:  ', req.body);
  console.log('---');
  next();
};

app.use(requestLogger);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/mtg', (req, res) => {
  const url =
    'https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt';

  request(url).pipe(res);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
