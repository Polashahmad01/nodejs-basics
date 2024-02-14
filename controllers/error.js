exports.get404 = (req, res, next) => {
  res.render('page-not-found', { pageTitle: 'Page Not Found', path: '' });
}
