const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require('mongoose-delete');

const Courses = new Schema(
  {
    name: { type: String, defaults: "Javascript" },
    description: {
      type: String,
      defaults: "Javascript cơ bản dành cho người mới",
    },
    videoId: { type: String, defaults: "" },
    level: { type: String, defaults: "Basic" },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);
mongoose.plugin(slug);
Courses.plugin(mongooseDelete, {
  deletedAt : true, 
  overrideMethods: 'all',
});

module.exports = mongoose.model("Courses", Courses);
