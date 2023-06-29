import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Use the dynamic port assigned by Heroku or fallback to 3000


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
