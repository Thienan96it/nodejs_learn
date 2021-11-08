const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //[GET] /
  index(req, res, next) {
    // Promise write
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);

    // // Callback write
    // Course.find({}, (err, courses) => {
    //     if (!err) {
    //         res.json(courses);
    //     } else {
    //         next(err);
    //     }
    // });
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
