import express from "express";

function getUserRoutes() {
  const router = express.Router();
  router.get("/users", getUsers);
  router.get("users/:userId", getUserById);
  return router;
}

// controller and utility functions here?

async function getUsers(req, res) {}

async function getUserById(req, res) {}

export { getUserRoutes };
