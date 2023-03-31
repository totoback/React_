const express = require('express');
const cors = require('cors');

const PORT = 4000;
const server = express();

server.use(cors());

server.get('/', (req, res) => {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  res.status(200).send(JSON.stringify(pororoObjArr));
});

server.listen(PORT, () => {
  console.log('통신 시작');
});
