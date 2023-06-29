import express from 'express';

const app = express();
const port = 3000;

app.set('trust proxy', true);

app.get('/ip', (req, res) => {
  const clientIp = req.connection.remoteAddress;

  const response = {
    ip: clientIp
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
