import express from "express";

import { verifyAdmin } from "../../middlewares/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  updateRoom,
  getRoomById,
  getAllRoom,
} from "../../controllers/room.js";

const router = express.Router();

// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoomById);

//GET ALL
router.get("/", getAllRoom);

export default router;
