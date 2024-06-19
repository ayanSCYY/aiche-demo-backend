import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// data
import db from "./db.js";

// types
import { typeDefs } from "./schema.js";

// resolvers
const resolvers = {
    Query: {
        users() {
            return db.users;
        },
        user(_, args) {
            return db.users.find((user) => user.uid === args.uid);
        },
    },

    Mutation: {
        createUser(_, args) {
            const newUser = {
                id: String(db.users.length + 1),
                ...args.user,
            };
            db.users.push(newUser);
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
