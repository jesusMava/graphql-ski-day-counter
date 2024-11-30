const { ApolloServer, gql, MockList } = require("apollo-server")

const typeDefs = gql`
    scalar Date

    """
    An object that describes the characteristics of a ski day

    """

    type SkiDay {
          "A ski day's unique identifier"
        id: ID!
          "A ski date  that a ski day occurred"
        date: Date!
          "A ski location where a ski day  occurred"
        mountain: String!
          "A date that a ski day occurred"
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

    type Subscription {
        newDay: SkiDay!
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