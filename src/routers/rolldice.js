import express from "express";
import { getDiceRoll6 } from "../models/dice";
export const router = express.Router();

router.get("/", (req, res) => {
  let diceroll6 = getDiceRoll6();

  res.send(diceroll6);
});
