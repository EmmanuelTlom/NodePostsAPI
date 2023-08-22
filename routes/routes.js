const express = require("express");
const postsModel = require("../models/models");
const router = express.Router();

// get a list of posts from the databasse
router.get("/posts", (req, res, next) => {
  res.send({ type: "GET" });
});

// add a new post to the database
router.post("/posts", (req, res, next) => {
  postsModel
    .create(req.body)
    .then((post) => {
      console.log(post);
      res.send(post);
    })
    .catch(next);
});

// update a post in the db
router.put("/posts/:id", (req, res, next) => {
  postsModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      postsModel.findOne({ _id: req.params.id }).then((post) => {
        res.send(post);
      });
    })
    .catch((err) => console.log(err));
});

// delete a post from the db
router.delete("/posts/:id", (req, res) => {
  postsModel
    .findByIdAndRemove({ _id: req.params.id })
    .then((post) => {
      res.send(post);
    })
    .catch((err) => console.log(err));
  // res.send({type:'DELETE'})
});

module.exports = router;
