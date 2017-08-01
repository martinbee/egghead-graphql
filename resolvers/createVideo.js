import { createVideo } from '../src/data/';

const createVideoResolver = (_, args) => createVideo(args.video);

export default createVideoResolver;
