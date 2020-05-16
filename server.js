const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const createError = require("http-errors");
const logger = require("morgan");
let cookieParser = require("cookie-parser");

//Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

///Import Routes
let indexRouter = require("./routes/index.route");
let questionRouter = require("./routes/question.route");

app.use("/", indexRouter);
app.use("/questions", questionRouter);

//Mongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017/imsearch", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

//Serving
app.listen(PORT, () => {
  console.log(`Server imsearch listening on port ${PORT}!`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
