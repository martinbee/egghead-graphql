import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

const videoInputType = new GraphQLInputObjectType({
  name: 'VideoInput',
  fields: {
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
})

export default videoInputType;
