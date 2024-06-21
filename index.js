import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// data
import db from "./db.js";

// types
import { typeDefs } from "./schema.js";

let userDetails = db.users;

// resolvers
const resolvers = {
    Query: {
        users() {
            return userDetails;
        },
        getUser(_, args) {
            return userDetails.find((user) => user.uid === args.uid);
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
