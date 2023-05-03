const express = require('express');
const cors = require('cors');
const app = express();
app.options('*', cors());

app.use(express.json());

const routes = require('./api_routes/routes');
routes(app);
const port = 6000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening to port http://localhost:${port}`);
});