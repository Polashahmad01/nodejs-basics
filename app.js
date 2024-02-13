const path = require('path');

const rootDir = require('./util/path')

const express = require('express');

const app = express();

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('This always runs');
//   next();
// });

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
});

app.listen(3000);