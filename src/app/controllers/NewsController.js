class NewsController {
  //[GET] /new
  index(req, res) {
    res.render("news");
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send("New Detail !!");
  }
}

module.exports = new NewsController();
