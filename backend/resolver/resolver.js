const Movie = require("../model/model");

// Resolvers
const resolvers = {
  movies: () => {
    // find all movies
    return Movie.find({});
  },

  movieByName: (args) => {
    return Movie.findOne({ name: args.name });
  },

  // Mutations
  addMovie: (args) => {
    let movie = new Movie({
      name: args.name,
      genre: args.genre,
      year: args.year,
    });
    movie.save();
    return movie;
  },
};

module.exports = resolvers;
