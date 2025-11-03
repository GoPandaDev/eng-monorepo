const express = require("express");
const routes = require("./routes/routes");

const app = express();
const PORT = 3000;

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});