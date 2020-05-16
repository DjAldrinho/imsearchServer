const express = require("express");
const router = express.Router();

let Question = require("./../models/question.model");

router.get("/", (req, res) => {
  Question.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ questions: data, message: "ok" });
    }
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Question.findById(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ questions: data, message: "ok" });
    }
  });
});

router.post("/add", (req, res) => {
  let question = new Question(req.body);
  question
    .save()
    .then(data => {
      res.status(200).json({ question: data, message: "Saved succefully!" });
    })
    .catch(err => {
      res.status(400).send(`adding new question failed: ${err}`);
    });
});

router.put("/update", (req, res) => {
  let id = req.params.id;

  Question.findByIdAndUpdate(id, { $set: req.body }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ questions: data, message: "ok" });
    }
  });
});

module.exports = router;
