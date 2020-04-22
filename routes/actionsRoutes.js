/* Actions Sub Routes */

const express = require("express");
const db = require("../data/helpers/actionModel");

const router = express.Router();

// POST
router.post("/", async (req, res) => {
  if (!req.body.project_id || !req.body.description || !req.body.notes) {
    return res.status(400).json({
      errorMessage: "Please provide a name, description and notes."
    });
  }
  try {
    const act = await db.get(req.params.id);
    const newlyAddedAct = await db.get(act.id);
    res.status(201).json(newlyAddedAct);
  } catch (e) {
    console.log(`Error => ${e}`);
    res.status(500).json({
      error: "There was an error while saving the action to the database"
    });
  }
});

// GET
router.get("/:id", async (req, res) => {
  const actId = await db.get(req.params.id);
  try {
    if (!actId) {
      return res.status(404).json({
        message: "The action with the specified ID does not exist."
      });
    } else {
      return res.status(200).json(actId);
    }
  } catch (e) {
    console.log(`Error => ${e}`);
    res.status(500).json({
      error: "The action information could not be retrieved."
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const deleteActId = await db.get(req.params.id);
  try {
    if (!deleteActId) {
      return res.status(404).json({
        message: "The action with the specified ID does not exist."
      });
    } else {
      await db.remove(req.params.id);
      res.status(200).end();
    }
  } catch (e) {
    res.status(500).json({
      error: "The action could not be removed"
    });
  }
});

// PUT -> Updates post
router.put("/:id", async (req, res) => {
  const actId = await db.get(req.params.id);
  if (!req.body.project_id || !req.body.description || !req.body.notes) {
    return res.status(400).json({
      errorMessage: "Please provide a name, description and notes."
    });
  }
  try {
    if (!actId) {
      return req.status(404).json({
        message: "The action with the specified ID does not exist."
      });
    } else {
      const updatedAct = await db.update(req.params.id, {
        project_id: req.body.project_id,
        description: req.body.description,
        notes: req.body.notes
      });
      res.status(200).json(actId);
    }
  } catch (e) {
    res.status(500).json({
      error: "The action information could not be modified."
    });
  }
});

module.exports = router;
