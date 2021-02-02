class NewsControllers {
  // [GET] /
  index(req, res) {
    res.render('new');
  }
  //   [GET] /news/:slug
  show(req, res) {
    res.send('News detail');
  }
}

module.exports = new NewsControllers();
