const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

// Enable CORS for all routes
app.use(cors()); 
const PORT = 3000;

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});