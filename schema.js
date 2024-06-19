export const typeDefs = `#graphql

    type User {
        id: ID!
        uid: ID!
        srcID: ID!
        name: String!
        email: String!
        mobile: String!
        aicheRegID: String!
        college: String!
        rollNumber: String!
        idCardPhoto: String!
        tSize: String!
        createdAt: String!
    }

    type Query {
        user(uid: ID!): User
        users: [User!]!

    }

    type Mutation {
        createUser(user: UserCreateInputType!): User
    }

    input UserCreateInputType {
        uid: String!
        aicheRegID: String!
        createdAt: String!
        email: String!
        tSize: String!
        name: String!
        mobile: String!
        college: String!
        rollNumber: String!
        idCardPhoto: String!
    }
`;
