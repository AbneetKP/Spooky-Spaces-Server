import express from "express";
import { getDiceRoll6 } from "../models/dice.js";
export const diceRouter = express.Router();

diceRouter.get("/", (req, res) => {
  let roll = getDiceRoll6();

  res.send({
    roll,
  });
});
