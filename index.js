import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean,
  }

  type Query {
    video: Video,
    videos: [Video],
  }

  type Schema {
    query: Query,
  }
`);

const video1 = {
  id: '1',
  title: 'Video 1',
  duration: 200,
  watched: false,
};

const video2 = {
  id: '2',
  title: 'Video 2',
  duration: 20,
  watched: true,
};

const videos = [video1, video2];

const resolvers = {
  video: () => ({
    id: '1',
    title: 'foo',
    duration: 180,
    watched: true,
  }),
  videos: () => videos,
};

const query = `
  query myFirstQuery {
    videos {
      id,
      title,
      duration,
      watched,
    }
  }
`;

graphql(schema, query, resolvers)
  .then(result => console.log(result))
  .catch(errors => console.log(errors));
