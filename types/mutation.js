import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

import videoType from './video.js';
import createVideoResolver from '../resolvers/createVideo.js';

const mutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type.',
  fields: {
    createVideo : {
      type: videoType,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The title of the video.',
        },
        duration: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'The duration of the video in seconds.',
        },
        released: {
          type: new GraphQLNonNull(GraphQLBoolean),
          description: 'Whether or not the video is released.',
        },
      },
      resolve: createVideoResolver,
    },
  }
});

export default mutationType;
