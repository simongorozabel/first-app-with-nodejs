const express = require("express");
const { type } = require("express/lib/response");
const router = express.Router();
const projects = require("../projects.json");

// colocar las rutas aquí
router.get("/", (req, res) => {
  res.render("home");
});
router.get("/about-us", (req, res) => {
  res.render("about-us");
});

router.get("/projects", (req, res) => {
  res.render("projects", { projects });
});
router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const projectById = projects.find((project) => project.id == id);
  res.render("project-detail", { id, projectById });
});

router.get("/team", (req, res) => {
  res.render("team");
});
router.get("/team/:name", (req, res) => {
  const { name } = req.params;
  res.render("team-member", { name });
});

module.exports = router;
