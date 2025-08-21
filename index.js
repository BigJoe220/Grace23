
const express = require("express");
const app = express();
const port = 3000;
const router = require("./router/router");

const scorerouter = require("./router/scoreRouter")

app.use(express.json());
app.use("/", router);
app.use(scorerouter)
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});