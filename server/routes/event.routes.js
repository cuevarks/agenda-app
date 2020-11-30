const express = require("express");
const router = express.Router();
const event = require("../models/event.model");
const m = require("../helpers/middlewares");

router.get("/", async (req, res) => {
  await event
    .getEvents()
    .then((events) => res.json(events))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  await event
    .getEvent(id)
    .then((event) => res.json(event))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

router.post("/", m.mustBeFilled, async (req, res) => {
  await event
    .insertEvent(req.body)
    .then((event) =>
      res.status(201).json({
        message: `The event #${event.id} has been created`,
        content: event,
      })
    )
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.put("/:id", m.mustBeFilled, async (req, res) => {
  const id = req.params.id;

  await event
    .updateEvent(id, req.body)
    .then((event) =>
      res.json({
        message: `The event #${id} has been updated`,
        content: event,
      })
    )
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await event
    .deleteEvent(id)
    .then((event) =>
      res.json({
        message: `The event #${id} has been deleted`,
      })
    )
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
