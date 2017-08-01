const videoResolver = () => new Promise(
  (resolve) => {
    resolve({
      id: 'a',
      title: 'GraphQL',
      duration: 180,
      watched: false,
    });
  }
);

export default videoResolver;
