const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Coffee are so hotted!");
});

app.listen(port, () => {
  console.log(`my coffee server is running on this port ${port}`);
});
