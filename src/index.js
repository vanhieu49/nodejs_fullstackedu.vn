const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 5000;
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, "public"));
// HTTP logger
app.use(morgan('combined'));
// template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, "src/resources/views"));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
