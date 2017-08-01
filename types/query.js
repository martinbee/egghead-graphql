import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import videoType from './video.js';
import videoResolver from '../resolvers/video.js';

import videosType from './videos.js';
import videosResolver from '../resolvers/videos.js';

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    videos: {
      type: videosType,
      resolve: videosResolver,
    },
    video: {
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the video',
        },
      },
      type: videoType,
      resolve: videoResolver,
    }
  }
});

export default queryType;
