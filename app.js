const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const authentication = require('./routes/authentication');
const vestingCreation = require('./routes/vestingCreation');
const withdrawFunctions = require('./routes/withdrawFunctions');
const claimToken = require('./routes/claimToken');
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(authentication);
app.use(vestingCreation);
app.use(claimToken);
app.use(withdrawFunctions);

app.listen(port, () => {
  console.log('Server running at port:- ', port);
});
