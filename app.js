const express = require('express');
const app = express();
const routers = require("./routers");
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/",routers);

app.listen(port,()=>{console.log("port is running in PORT : "+port)});