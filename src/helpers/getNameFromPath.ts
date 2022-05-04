export const getNameFromPath = path => {
  if (path.includes("-")) {
    return path
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    return path.charAt(0).toUpperCase() + path.slice(1);
  }
};
