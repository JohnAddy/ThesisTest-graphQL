//const Movie = require('../model/model')

const movies = [
  {
    id: 1,
    name: "John Wick Parabellum",
    genre: "Action",
    year: 2019,
    image: "https://t.ly/A8c1",
  },
  {
    id: 2,
    name: "Leonardo DiCaprio Inception",
    genre: "Action",
    year: 2010,
    image: "https://t.ly/A8c1",
  },
  {
    id: 3,
    name: "Bobby Driscoll Peter Pan",
    genre: "Animation",
    year: 1953,
    image: "https://t.ly/A8c1",
  },
  {
    id: 4,
    name: "Antonio Banderas Desperado",
    genre: "Action",
    year: 1995,
    image: "https://t.ly/A8c1",
  },
  {
    id: 5,
    name: "John Travolta Pulp Fiction",
    genre: "Crime",
    year: 1994,
    image: "https://t.ly/A8c1",
  },
  {
    id: 6,
    name: "Jonathan Pryce Brazil",
    genre: "Action",
    year: 1985,
    image: "https://t.ly/A8c1",
  },
  {
    id: 7,
    name: "Tura Satana Faster Pussycat... Kill! Kill!",
    genre: "Action",
    year: 1965,
    image: "https://t.ly/A8c1",
  },
  {
    id: 8,
    name: "John Wick Parabellum",
    genre: "Action",
    year: 2019,
    image: "https://t.ly/A8c1",
  },
];

const resolvers = {
  movies: () => {
    return movies;
  },
};

module.exports = resolvers;
