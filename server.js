const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

const pagesRoutes = require("./pages/routes");
const graphqlRoutes = require("./graphql/routes");

const app = express();

app.use(bodyParser.json());
app.use("/", pagesRoutes);
app.use("/graphql", graphqlRoutes);
// app.use("/graphql", graphqlExpress({ graphqlRoutes }));
// app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(5000, () => console.log("Express app listening on localhost:5000"));
