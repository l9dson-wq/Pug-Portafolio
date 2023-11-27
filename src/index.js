const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views/"));
app.use(express.static(path.join(__dirname, "/public/"))); 

// Homepage
app.get("/home", (req, res) => {
  return res.render('homepage', {
    title: "Homepage",
  });
});

//ABOUT
app.get("/About", (req, res) => {
  return res.render("About", {
    title: "About me",
  });
});

//Technologies
app.get("/Technologies", (req, res) => {
  return res.render("Technologies", {
    title: "Technologies",
  })
});

// Projects
app.get("/Projects", (req, res) => {
  return res.render("Projects", {
    title: "Projects",
  });
});

// Blogs
app.get("/Blog", (req, res) => {
  return res.render("Blog", {
    title: "Blog",
  });
});

app.listen(PORT, () => {
  console.log(`Server is being listening on http://localhost:${PORT}`);
});