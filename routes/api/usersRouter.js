import express from "express";
import {
  getAllUsers,
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUsers,
  updateUserSubscription,
} from "../../controllers/usersController.js";
import { authenticateToken } from "../../middlewares/auth.js";

const router = express.Router();

/* GET: // http://localhost:3000/api/users */
router.get("/", authenticateToken, getAllUsers);

/* POST: // http://localhost:3000/api/users/signup */
router.post("/signup", signupUser);

/* POST: // http://localhost:3000/api/users/login */
router.post("/login", loginUser);

/* POST: // http://localhost:3000/api/users/logout */
router.post("/logout", authenticateToken, logoutUser);

/* GET: // http://localhost:3000/api/users/current */
router.get("/current", authenticateToken, getCurrentUsers);

/* PATCH: // http://localhost:3000/api/users/ */
router.patch("/", authenticateToken, updateUserSubscription);

export { router };
