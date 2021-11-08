const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /Me/stored/courses
  storedCourses(req, res, next) {

    Promise.all([Course.countDocumentsDeleted({}), Course.find({})])
      .then(([countDocumentsDeleted, courses]) => {
        res.render("me/stored-courses", {
          countDocumentsDeleted,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next)

    Course.countDocumentsDeleted({})

    Course.find({})
  }

  // [GET] /Me/trashed/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
