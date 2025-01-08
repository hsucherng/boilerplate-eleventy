const ROUTES = {
  HOME: "",
  SAMPLE: {
    NESTED: "sample/nested"
  }
};

module.exports = {
  rootPath: (data) => {
    return data.page.filePathStem
      .split('/')
      .map(() => '../')
      .join('')
  },

  nav: [
    {
      label: 'Home',
      url: ROUTES.HOME
    },
    {
      label: 'Sample',
      url: ROUTES.SAMPLE.NESTED
    }
  ],

  ROUTES

  /*
   * Globally adjust the permalink so that it does not output
   * files as folder index HTMLs.
   *
   * https://github.com/11ty/eleventy/issues/1199
   */
  // permalink: (data) => data.page.filePathStem + '.html'
};
