import { createVideo } from '../src/data/';

const createVideoResolver = (_, args) => createVideo(args);

export default createVideoResolver;
