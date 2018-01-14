const express = require("express");

const graphqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const router = express.Router();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

router.use(
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// // The GraphQL endpoint
// app.use("/graphql", graphqlExpress({ schema }));

// // GraphiQL, a visual editor for queries
// app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

module.exports = router;
