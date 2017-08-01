const videoA = {
  id: 'a',
  title: 'Learn Ember',
  duration: 180,
  watched: false,
};

const videoB = {
  id: 'b',
  title: 'React Essentials',
  duration: 150,
  watched: true,
};

const videos = [videoA, videoB];

const getVideoById = (videoId) => new Promise((resolve) => {
  resolve(videos.find(({ id }) => id === videoId));
});

export default getVideoById;
