const { readdirSync } = require("fs");
const { resolve } = require("path");
const filterDirectory = require("./filterDirectory");

const getDirectories = src => {
  const directories = readdirSync(resolve(__dirname, "..", "..", "src", src));
  directories.unshift("👉 Create Page here");
  return filterDirectory(directories);
};

module.exports = getDirectories;
