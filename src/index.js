const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
dotenv.config();

const app = express();

// TODO: configure cors
app.use(cors());

app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Express connected on port ${port}`);
  }
});
