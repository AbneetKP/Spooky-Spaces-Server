import express from "express";
import { router } from "./routers/rolldice";

const app = express();
const port = 3000;
app.use("/rollDice", router);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
