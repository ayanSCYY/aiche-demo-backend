export const typeDefs = `#graphql

    type User {
        uid: ID!
        name: String!
        email: String!
        mobile: String!
        aicheRegID: String!
        college: String!
        rollNumber: String!
        idCardPhoto: String!
        tSize: String!
    }

    type Query {
        user(uid: ID!): User
        users: [User!]!

    }

    type Mutation {
        createUser(user: AddUserInput!): User
    }

    input AddUserInput {
        aicheRegID: String!
        email: String!
        tSize: String!
        name: String!
        mobile: String!
        college: String!
        rollNumber: String!
        idCardPhoto: String!
    }
`;
