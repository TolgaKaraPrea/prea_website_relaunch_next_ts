const filterDirectory = directories =>
  directories.filter(dir => {
    // Not available
    if (dir === null) return false;

    // Root / parent
    if (dir.substr(0, 1) === ".") return false;

    // Private
    if (dir.substr(0, 1) === "_") return false;

    // Add to list
    return true;
  });

module.exports = filterDirectory;
