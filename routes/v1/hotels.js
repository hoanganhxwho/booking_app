import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelById,
  getAllHotel,
} from "../../controllers/hotel.js";
import { verifyAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/:id", getHotelById);

//GET ALL
router.get("/", getAllHotel);

export default router;
