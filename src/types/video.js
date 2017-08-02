import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

import nodeInterface from '../interfaces/node.js';

const videoType = new GraphQLObjectType({
  name: 'Video',
  description: 'A video on egghead.io.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the video.',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the video.',
    },
    duration: {
      type: GraphQLInt,
      description: 'The duration of the video in seconds.',
    },
    watched: {
      type: GraphQLBoolean,
      description: 'Whether or not the viewer has watched the video.',
    },
  },
  interfaces: [nodeInterface],
});

export default videoType;
