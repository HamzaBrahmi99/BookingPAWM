import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, reserveRoomHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
router.put("/reserve/:id", verifyUser, reserveRoomHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
router.delete("/hotels/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GETALL
router.get("/", getHotels);
router.get("/allhotels", verifyAdmin, getHotels);
router.get("/hotels", verifyAdmin, getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);


export default router