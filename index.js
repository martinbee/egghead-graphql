import express from 'express';
import { GraphQLSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

import queryType from './types/query.js';
import mutationType from './types/mutation.js';

const PORT = process.env.PORT || 3000;
const server = express();

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

server.use(
  '/graphql',
  graphqlHTTP({ schema, graphiql: true }),
);

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
