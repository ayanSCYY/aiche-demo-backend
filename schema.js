export const typeDefs = `#graphql

    type User {
        id: ID!
        uid: String
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

    type Event{
        orgID: String!
        id: ID!
        name: String!
        subHeading: String!
        prizeMoney: String!
        description: [String!]!
        poster: String!
        rules: String!
        isTeamEvent: Boolean!
        maxTeamSize: Int
        minTeamSize: Int
    }

    type Events{
        eventIDs: [String!]!
    }

    type EventRegistration {
        id: ID!
        eventID: ID!
        userID: ID!
        
    }

    type TeamEventRegistration {
        id: ID!
        eventID: ID!
        teamName: String!
        userIDs: [ID!]!
    }

    type EventRegs{
        eventID: ID!
        userID: ID
        userIDs: [ID]
        teamName: String
    }

    type Query {
        getUser(uid: String): User
        users: [User!]!
        getEvents(orgID: String!, pagination: PaginationInputType): [Event]
        eventRegistration(userID: ID, orgID: ID): [EventRegistration]
        events: Events
        teamRegistrationsByUser(userID: ID!): [TeamEventRegistration]
        getTotalRegistered: [EventRegs]
    }

    type Mutation {
        createUser(user: UserCreateInputType!): User
        createEventRegistration(eventRegistration: EventRegistrationCreateInputType!): EventRegistration
        createTeamEventRegistration(teamEventRegistration: TeamEventRegistrationCreateInputType!): TeamEventRegistration
    }

    input TeamEventRegistrationCreateInputType {
        eventID: ID!
        teamName: String!
        userIDs: [ID!]!
    }


    input EventRegistrationCreateInputType {
        eventID: ID!
        userID: ID!
    }

    input PaginationInputType {
        limit: Int
        offset: Int
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
