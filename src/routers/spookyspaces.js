import express from "express";
import { spookySpaces } from "../models/board.js";
export const boardRouter = express.Router();

boardRouter.get("/", (req, res) => {
  const board = spookySpaces();

  res.send({
    board,
  });
});
