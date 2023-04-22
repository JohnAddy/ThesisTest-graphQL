const mongoose = require("mongoose");
var { buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const movieSchema = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://johnadekunle2018:SRrIsDlsAvpkY0qR@cluster0.ft1ycxk.mongodb.net/moviediary?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      //  useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Error", err));

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
  name: String
  }
  `);

//GraphQL
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: movieSchema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Node - My Thesis Backend Server");
});

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
