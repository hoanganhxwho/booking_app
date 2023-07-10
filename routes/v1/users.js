import express from "express";
import {
  updateUser,
  deleteUser,
  getUserById,
  getAllUser,
} from "../../controllers/user.js";
import { verifyAdmin, verifyUser } from "../../middlewares/verifyToken.js";

const router = express.Router();

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUserById);

//GET ALL
router.get("/", verifyAdmin, getAllUser);

export default router;
