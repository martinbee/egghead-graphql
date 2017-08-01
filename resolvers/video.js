import { getVideoById } from '../src/data/';

const videoResolver = (_, args) => getVideoById(args.id);

export default videoResolver;
