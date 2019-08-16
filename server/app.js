const express = require("express");
const chalk = require("chalk");
const graphqlHTTP = require("express-graphql")
const schema = require("./schema/schema")


const app = express();
const port = 4000

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(chalk.green.inverse(`Listening for requests on port ${port}.`))
})