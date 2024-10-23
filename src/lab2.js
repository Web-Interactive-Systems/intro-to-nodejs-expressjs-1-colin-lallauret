/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create an express server
 - The server should implements the following APIs
  // app.get
  // app.post
  // app.put
  // app.delete
  // app.all
  // app.use
  // app.listen

  -- Hint, use postman to interact with the server 
  
 */
const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET request
app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST request
app.post("/", (req, res) => {
  res.send("POST");
});

// PUT request
app.put("/", (req, res) => {
  res.send("PUT");
});

// DELETE request
app.delete("/", (req, res) => {
  res.send("DELETE");
});

// ALL request
app.all("/all", (req, res) => {
  res.send("ALL");
});

// Middleware example
app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
