const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 12000;

app.set('view engine', 'ejs');
app.set('views', './views');

//라우팅
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/profile', (req, res) => {
  res.render('profile');
});
app.get('/map', (req, res) => {
  res.render('map');
});
app.get('/contect', (req, res) => {
  res.render('contect');
});

app.listen(port, () => {
  console.log(`서버가 실행됐습니다. 접속주소 : http://localhost:${port}`);
});
