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

// GET -> Returns specific post
router.get("/:id", async (req, res) => {
  const specId = await db.get(req.params.id);
  try {
    if (!specId) {
      return res.status(404).json({
        message: "The project with the specified ID does not exist."
      });
    } else {
      return res.status(200).json(specId);
    }
  } catch (e) {
    console.log(`Error => ${e}`);
    res.status(500).json({
      error: "The project information could not be retrieved."
    });
  }
});
// DELETE -> Deletes post
router.delete("/:id", async (req, res) => {
  const deleteId = await db.get(req.params.id);
  try {
    if (!deleteId) {
      return res.status(404).json({
        message: "The project with the specified ID does not exist."
      });
    } else {
      await db.remove(req.params.id);
      res.status(200).end();
    }
  } catch (err) {
    res.status(500).json({
      error: "The project could not be removed"
    });
  }
});
// PUT -> Updates post
router.put("/:id", async (req, res) => {
  const proId = await db.get(req.params.id);
  if (!req.body.name || !req.body.description) {
    return res.status(400).json({
      errorMessage: "Please provide name and description for the project."
    });
  }
  try {
    if (!proId) {
      return req.status(404).json({
        message: "The project with the specified ID does not exist."
      });
    } else {
      const updatedPro = await db.update(req.params.id, {
          name: req.body.name,
          description: req.body.description
      });
      res.status(200).json(proId);
    }
  } catch (e) {
    res.status(500).json({
      error: "The project information could not be modified."
    });
  }
});

module.exports = router;
