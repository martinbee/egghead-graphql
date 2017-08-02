import { getVideoById } from '../data/';

const videoResolver = (_, args) => getVideoById(args.id);

export default videoResolver;
