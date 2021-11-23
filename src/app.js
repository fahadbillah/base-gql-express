import 'regenerator-runtime/runtime';
import fs from 'fs';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import resolvers from './resolvers';

(async () => {
  const typeDefs = fs.readFileSync(`${__dirname}/schema.gql`, 'utf8');
  const server = new ApolloServer({
    typeDefs: [
      typeDefs,
    ],
    resolvers: {
      ...resolvers,
    },
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    // context: ({ req }) => {
    //   console.log(req.body, req.headers);
    //   return { token: '' };
    // },
  });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
})();
