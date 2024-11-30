const { ApolloServer, gql, MockList } = require("apollo-server")

const typeDefs = gql`
    scalar Date

    type SkiDay {
        id: ID!
        date: Date!
        mountain: String!
        conditions: Conditions
    }

    input AddDayInput {
        date: Date
        mountain: String!
        conditions: Conditions!
    }

    type RemoveDayPayload {
        day: SkiDay!
        removed: Boolean
        totalBefore: Int
        totalAfter: Int
    }

    type Mutation {
        addDay(input: AddDayInput!): SkiDay
        removeDate(id: ID!): RemoveDayPayload!
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

const mocks = {
    Date: () => "1/2/2025",
    String: () => "Cool data",
    Query: () => ({
        allDays: () => [...new Array(2)]
    })
}

const server = new ApolloServer({
    typeDefs,
    mocks: mocks
})

server.listen().then(({url}) => console.log(`server running at ${url}`))