import express from "express";

export const dialogueRouter = express.Router();

dialogueRouter.get("/welcome", (req, res) => {
  res.send(`Welcome Trick or Treaters! Welcome to spooky spaces

  Lets start by getting your names`);
});

dialogueRouter.get("/end", (req, res) => {
  res.send(
    `You're the first person to get enough candy to clear the Spook Spaces challenge:`
  );
});
