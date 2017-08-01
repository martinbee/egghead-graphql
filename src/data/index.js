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

export const getVideos = () => new Promise(resolve => resolve(videos));

export const getVideoById = (videoId) => new Promise((resolve) => {
  resolve(videos.find(({ id }) => id === videoId));
});

