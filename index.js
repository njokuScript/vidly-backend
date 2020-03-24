const express = require("express");
const app = express();
app.use(express.json());
const Joi = require("joi");
//data of movie genres
const genres = [
  {
    genreID: 1,
    name: "Action"
  },
  {
    genreID: 2,
    name: "Thriller"
  },
  {
    genreID: 3,
    name: "Adventure"
  },
  {
    genreID: 4,
    name: "Horror"
  },
  {
    genreID: 5,
    name: "Comedy"
  },
  {
    genreID: 6,
    name: "Romance"
  },
  {
    genreID: 7,
    name: "SciFi"
  },
  {
    genreID: 8,
    name: "Crime"
  }
];
app.get("/", (req, res) => {
  res.send("Hello world");
});
//get request- read genres
app.get("/api/genres/", (req, res) => {
  res.send(genres);
});
//post request- create genres
app.post("/api/genres/", (req, res) => {
  console.log(result);

  if (result.error)
    return res.status(400).send(result.error.details[0].message);
  const genre = {
    genreID: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre);
});
//put request - update genres
app.put("/api/genres/:genreID", (req, res) => {
  const genre = genres.find(c => c.genreID === parseInt(req.params.genreID));
  if (!genre) return res.status(404).send("movie genre  not found");
  res.send(genre);
  genre.name = req.body.name;
  res.send(genre);
});
//delete request - delete genres
app.delete("/api/genres/:genreID", (req, res) => {
  const genre = genres.find(c => c.genreID === parseInt(req.params.genreID));
  if (!genre) return res.status(404).send("movie genre  not found");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});
//get by id
app.get("/api/genres/:genreID", (req, res) => {
  const genre = genres.find(c => c.genreID === parseInt(req.params.genreID));
  if (!genre) return res.status(404).send("Movie genre not found");
  res.send(genre);
});
validateGenre = genre => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(genre, schema);
};
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
