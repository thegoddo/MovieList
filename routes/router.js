const { Router } = require("express");

router = Router();

movieList = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
  },
  {
    title: "The Godfather",
    year: 1972,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
  },
  {
    title: "The Dark Knight",
    year: 2008,
  },
];

router.get("/", (req, res) => {
  res.render("index.ejs", { movieList: movieList });
});

router.post("/add", (req, res) => {
  movieList.push({ title: req.body.title, year: req.body.year });
  res.redirect("/");
});

module.exports = router;
