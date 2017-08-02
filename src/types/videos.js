import { GraphQLList } from 'graphql';

import videoType from './video.js';

const videosType = new GraphQLList(videoType)

export default videosType;
