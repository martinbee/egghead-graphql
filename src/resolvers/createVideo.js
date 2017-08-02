import { createVideo } from '../data/';

const createVideoResolver = (_, args) => createVideo(args.video);

export default createVideoResolver;
