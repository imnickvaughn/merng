const graphql = require("graphql");
const _ = require("lodash")


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
} = graphql;

var books = [
    { title: "a knights tail", genre: "fantasy", id: "1", authorId: "1" }
    { title: "scaredy pants", genre: "horror", id: "2", authorId: "1" }
    { title: "real housewife's husbands", genre: "drama", id: "3", authorId: "1" }
    { title: "how to poop right", genre: "self help", id: "4", authorId: "2" }
]
var authors = [
    { name: "nick", age: 32, id: "1" }
    { name: "lilypad", age: 2, id: "2" }
]


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID },
    })
})

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //code to get data from db / other source
                return _.find(books, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //code to get data from db / other source
                return _.find(authors, { id: args.id });
            }
        },
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery,
})
