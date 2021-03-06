import "./config"; // side effects (logging)
import config from "./config";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";


const app = express();
const PORT = config.port;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("nodejs - express + typescript");
});

app.listen(PORT, () => {
  console.log(`Server listening on port :${PORT}`);
});
