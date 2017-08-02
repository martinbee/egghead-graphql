import {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import videoType from '../types/video.js';

const nodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolveType: ({ title }) => {
    if (title) return videoType;

    return null;
  },
});

export default nodeInterface;
