import express from "express";
import { createOrder, verifyPayment } from "../controllers/donationController.js";

const donationRouter = express.Router();

donationRouter.post("/create-order", createOrder);
donationRouter.post("/verify", verifyPayment);

export default donationRouter;
