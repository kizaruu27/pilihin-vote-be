import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.get("/ping", async (req: Request, res: Response): Promise<void> => {
  res.json({
    message: "pong",
  });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
