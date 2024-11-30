const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    type SkiDay {
        id: ID!
        date: String!
        mountain: String!
        conditions: Conditions
    }

    input AddDayInput {
        date: String
        mountain: String!
        conditions: Conditions!
    }

    type Mutation {
        addDay(input: AddDayInput!): SkiDay
        removeDate(id: ID!): SkiDay!
    }

    enum Conditions {
        POWDER
        HEAVY
        ICE
        THIN
    }

    type Query {
        totalDays: Int!
        allDays: [SkiDay!]!
    }
`


const server = new ApolloServer({
    typeDefs,
    mocks: true
})

server.listen().then(({url}) => console.log(`server running at ${url}`))