import express from "express";
import { addResidencyToFavorite, allBookings, bookVisit, cancelBooking, createUser, getAllFauvoriteResidencies } from "../controllers/userCntrl.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFavorites/:rid", addResidencyToFavorite);
router.post("/allFavorites", getAllFauvoriteResidencies);
export {router as userRoute};
