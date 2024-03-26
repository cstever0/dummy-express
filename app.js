const express = require("express");

const app = express();

require('dotenv').config();

app.use(express.json());

// 1:
app.get('/', (req, res, next) => {
    console.log('number 1 was triggered')
    next(err);
  });

  // 2:
  app.use((err, req, res, next) => {
    console.log('number 2 was triggered')
    next(err);
  });

  // 3:
  app.use((err, req, res, next) => {
    console.log('number 3 was triggered')
    return res.json();
  });

  // 4:
  app.use((req, res, next) => {
    console.log('number 4 was triggered')
    next();
  });

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
