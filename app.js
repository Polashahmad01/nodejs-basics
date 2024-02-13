const path = require('path');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));

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

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);