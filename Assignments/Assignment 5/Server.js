const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/BookRoutes");
const logger = require("./middleware/logger");

const app = express();


app.use(logger);
app.use(express.json());

connectDB();

app.use("/api/books", bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
