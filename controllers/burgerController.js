const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgerModels.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", (req, res) => {
  burger.create(
        [
    "name", "devoured"
  ],

    [req.body.name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
// the delete route
router.delete("/api/burger/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
