const moongose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const router = express.Router();

//model database
const Genre = moongose.model(
  "Genre",
  new moongose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      lowercase: true,
    },
  })
);

//get request- read genres
router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});
//post request- create genres
router.post("/", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let genre = new Genre({
    name: req.body.name,
  });
  genre = await genre.save();
  try {
    res.send(genre);
  } catch (error) {
    console.log(error.message);
  }
});
//put request - update genres
router.put("/:id", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
    }
  );
  if (!genre) return res.status(404).send("movie genre  not found");

  res.send(genre);
});
//delete request - delete genres
router.delete("/:id", async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);
  if (!genre) return res.status(404).send("movie genre  not found");

  res.send(genre);
});
//get by id
router.get("/:id", async (req, res) => {
  const genre = await Genre.findByID(req.body.params);
  if (!genre) return res.status(404).send("Movie genre not found");
  res.send(genre);
});
validateGenre = (genre) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
};
module.exports = router;
