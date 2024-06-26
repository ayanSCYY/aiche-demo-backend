import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// data
import db from "./db.js";

// types
import { typeDefs } from "./schema.js";

let userDetails = db.users;
let events = db.events;
let registrations = db.eventRegistrations;

// resolvers
const resolvers = {
    Query: {
        users() {
            return userDetails;
        },
        getUser(_, args) {
            return userDetails.find((user) => user.uid === args.uid);
        },
        getEvents(_, args) {
            return events.filter((event) => event.orgID === args.orgID);
        },
        eventRegistration(_, args) {
            const userEventRegistrations = registrations.filter(
                (eventRegistration) => {
                    return eventRegistration.userID === args.userID;
                }
            );

            const filteredEventRegistrations = userEventRegistrations.filter(
                (eventRegistration) => {
                    return events.some((event) => {
                        return (
                            event.id === eventRegistration.eventID &&
                            event.orgID === args.orgID
                        );
                    });
                }
            );
            return filteredEventRegistrations;
        },
        events() {
            const eventIDs = events.map((event) => {
                if (event.orgID === "aiche") {
                    return event.id;
                }
            });
            return {
                eventIDs: eventIDs || [],
            };
        },
        teamRegistrationsByUser(_, args) {
            return registrations.filter((registration) => {
                return registration.userIDs?.includes(args.userID);
            });
        },
        getTotalRegistered() {
            return registrations;
        },
    },

    Mutation: {
        createUser(_, args) {
            const newUser = {
                id: String(userDetails.length + 1),
                srcID: String(userDetails.length + 1),
                ...args.user,
            };

            userDetails.push(newUser);
            return newUser;
        },
        createEventRegistration(_, args) {
            const newEventRegistration = {
                id: String(registrations.length + 1),
                ...args.eventRegistration,
            };

            registrations.push(newEventRegistration);
            return newEventRegistration;
        },
        createTeamEventRegistration(_, args) {
            const newTeamEventRegistration = {
                id: String(registrations.length + 1),
                ...args.teamEventRegistration,
            };
            registrations.push(newTeamEventRegistration);
            return newTeamEventRegistration;
        },
    },
};

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at : ${url}`);
