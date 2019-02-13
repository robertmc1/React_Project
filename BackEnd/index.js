const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = +process.argv.slice(2)[0] || process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/', require('./routes/team'));
app.use('/', require('./routes/user'));

app.listen(port, () => console.log(`El servidor escuchando en el puerto ${port}`));
