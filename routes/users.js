import express from "express";

import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getSingleUser,
} from "../controllers/user.js";

const router = express.Router();


router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getSingleUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
