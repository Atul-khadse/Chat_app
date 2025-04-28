import express from "express";
import { protectRouter } from "../middlewares/auth.meddelware.js";
import { getUsersForSidebar, getMesaages, sendMesaage } from "../controllers/message.controller.js";

const router = express.Router();


router.get("/users", protectRouter, getUsersForSidebar);
router.get("/:id",protectRouter,getMesaages);
router.post("/send/:id",protectRouter,sendMesaage);


export default router;