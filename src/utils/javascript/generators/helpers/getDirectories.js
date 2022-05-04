const { readdirSync } = require("fs");
const filterDirectory = require("./filterDirectory");
const { resolve } = require("path");

const getDirectories = src => {
  const directories = readdirSync(resolve(__dirname, "..", "..", "src", src));
  directories.unshift("👉 Create Page here");
  return filterDirectory(directories);
};

module.exports = getDirectories;
