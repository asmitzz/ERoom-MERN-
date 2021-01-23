const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 8000;

app.use(cors());
app.use( bodyParser.json({ limit:'1024mb' }) );
app.use( bodyParser.urlencoded({ limit:'1024mb', extended:true ,parameterLimit:50000000000}) );

app.use(routes);

app.listen(port,() => console.log(`server is running on : ` ,port))