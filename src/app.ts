import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

import "express-async-errors";
import { router } from "./routes";

dotenv.config();
const app = express();
app.use(express.json());

app.use(router);

app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.get("/", (req, res) => {
    res.send("ok").status(200);
});

app.listen(3333, () => console.log("Listening on http://localhost:3333"));
