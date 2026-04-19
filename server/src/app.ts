// Main application file for setting up the Express server, including middleware and route handling
import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use("/api", router);

export default app;