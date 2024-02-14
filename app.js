const path = require('path');

const rootDir = require('./util/path')

const express = require('express');
// const expressHbs = require('express-handlebars');

const errorsController = require('./controllers/error');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Express Handlebars
// app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');
// app.set('views', 'views');

//Pug
// app.set('view engine', 'pug');
// app.set('views',  'views');

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('This always runs');
//   next();
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorsController.get404);

app.listen(3000);