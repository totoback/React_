const express = require('express');
const cors = require('cors');

const PORT = 4000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  const listArr = [
    {
      title: '제목1',
      contents: '컨텐츠1',
    },
    {
      title: '제목2',
      contents: '컨텐츠2',
    },
    {
      title: '제목3',
      contents: '컨텐츠3',
    },
  ];
  res.status(200).send(JSON.stringify(listArr));
});

app.listen(PORT, () => {
  console.log('포트 실행 완료');
});
