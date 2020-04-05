const moongose = require("mongoose");
const Joi = require("joi");
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

validateGenre = (genre) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
};
exports.Genre = Genre;
exports.validate = validateGenre;
