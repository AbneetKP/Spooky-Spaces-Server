import express from "express";
import { dialogueRouter } from "./routers/dialogue.js";
import { diceRouter } from "./routers/rolldice.js";
import { boardRouter } from "./routers/spookyspaces.js";
const app = express();
const port = 3000;

app.use("/dialogue", dialogueRouter);
app.use("/rollDice", diceRouter);
app.use("/board", boardRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
