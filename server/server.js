require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


require('./routes/app.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})