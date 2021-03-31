module.exports = {
  rootPath: (data) => {
    return data.page.url
      .split('/')
      .reduce((a, b) => a+(b && '../'),)
  }
};
