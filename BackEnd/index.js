require('./config/environment');
require('./config/mongoose');
//const port = +process.argv.slice(2)[0] || process.env.PORT || 3001;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.json());

app.use('/team', require('./routes/team'));
app.use('/user', require('./routes/user'));
app.use('/role', require('./routes/role'));

app.listen(process.env.PORT, () => console.log(`El servidor escuchando en el puerto ${process.env.PORT}`));
