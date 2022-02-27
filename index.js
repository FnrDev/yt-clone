const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// router
app.use('/', require('./routers/index'));
app.use('/video', require('./routers/video'));

app.listen(process.env.PORT, () => console.log(`App is ready on port ${process.env.PORT}`));