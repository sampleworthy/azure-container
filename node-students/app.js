const express = require("express");
const app = express();

// Student data
const students = [
  { id: 1, name: "John Doe", age: 20 },
  { id: 2, name: "Jane Smith", age: 22 },
  { id: 3, name: "Mike Johnson", age: 21 },
  { id: 4, name: "Sarah Williams", age: 19 },
];

// Root path for information about different API paths
app.get("/", (req, res) => {
  const apiPaths = {
    "/students": "Get all students",
    "/students/:id": "Get a specific student by ID",
  };
  res.json(apiPaths);
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Get a specific student by ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// command running the above application on 3000 port
// node app.js
