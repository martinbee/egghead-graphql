import { GraphQLObjectType } from 'graphql';

import videoType from './video.js';
import videoResolver from '../resolvers/video.js';

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    video: {
      type: videoType,
      resolve: videoResolver,
    }
  }
});

export default queryType;
