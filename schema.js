export const typeDefs = `#graphql

    type User {
        id: ID!
        name: String!
        email: String!
        phone: String!
        aicheID: String!
        college: String!
        rollNo: String!
        idCard: String!
        tShirtSize: String!
    }

    type Query {
        user(id: ID!): User
        users: [User!]!

    }

    type Mutation {
        addUser(user: AddUserInput!): User
    }

    input AddUserInput {
        name: String!
        email: String!
        phone: String!
        aicheID: String!
        college: String!
        rollNo: String!
        idCard: String!
        tShirtSize: String!
    }
`;
