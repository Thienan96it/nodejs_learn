"use strict";

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const db = require("./config/db");
const methodOverride = require("method-override");

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

// connect to db
db.connect();

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
); // nhan du lieu tu form submit tra ve
app.use(express.json()); // nhan du lieu tu file js tra ve
app.use(methodOverride("_method"));

// http logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});