const express = require('express');

// get environment variables
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV;
const mySetting = process.env.MY_SETTING;
const version = 4;

const app = express();
app.use(express.json());

// Define the route for the root URL
app.get('/ip', (req, res) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({ ip });
});

// start express
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
