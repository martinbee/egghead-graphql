import {
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

import videoType from './video.js';
import videoInputType from './videoInput.js';
import createVideoResolver from '../resolvers/createVideo.js';

const mutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type.',
  fields: {
    createVideo : {
      type: videoType,
      args: {
        video: {
          type: new GraphQLNonNull(videoInputType),
        },
      },
      resolve: createVideoResolver,
    },
  }
});

export default mutationType;
