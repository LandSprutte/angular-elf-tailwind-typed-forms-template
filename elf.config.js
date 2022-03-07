module.exports = {
  cli: {
    fuzzypath: {
      rootPath: process.cwd(), // defaults to process.cwd()
      excludePath(path) {
        return path.includes("node_modules");
      },
      excludeFilter(path) {
        return path.includes(".");
        // defaults to path.includes('.');
      },
    },
  },
};
