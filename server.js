const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// const cors = require("cors");

app.get("/api", (req, res) => {
    res.json({ message: "Hello world!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
