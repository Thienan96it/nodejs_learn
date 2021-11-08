const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /courses/:slug dùng params để truyền giá trị động
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        return res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /course/api
  showAPI(req, res, next) {
    Course.find({})
      .then((response) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.json(response);
      })
      .catch(next);
  }
  
  // [POST] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /course/store
  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  // [GET] /courses/_id/edit
  edit(req, res, next) {
    Course.findOne({ _id: req.params.id })
      .then((course) => {
        console.log(course);
        return res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //[PUT] /courses/_id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[DELETE] /courses/_id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[FORCE DELETE] /courses/_id/force
  truncate(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[PATCH] /courses/_id restore
  restore(req, res, next) {
    Course.restore({ _id : req.params.id })
      .then(() => res.redirect('/me/trash/courses'))
      .catch(next);
  }
}

module.exports = new CourseController();
