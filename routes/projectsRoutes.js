/* Projects Sub Routes */

const express = require("express");
const db = require("../data/helpers/projectModel");

const router = express.Router();

// POST
router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.description) {
    return res.status(400).json({
      errorMessage: "Please provide a name and description."
    });
  }
  try {
    const pro = await db.insert(req.body);
    const newlyAddedPro = await db.get(pro.id);
    res.status(201).json(newlyAddedPro);
  } catch (e) {
    console.log(`Error => ${e}`);
    res.status(500).json({
      error: "There was an error while saving the post to the database"
    });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const pro = await db.getProjectActions();
    res.status(200).json(pro);
  } catch (e) {
    console.log(`Error => ${e}`);
    res.status(500).json({
      error: "Project information could not be retrieved"
    });
  }
});

module.exports = router;
