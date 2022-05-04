function getFormattedLowerName(route) {
  let formattedRouteWords = route.split("-");
  let formattedLowerName;

  if (formattedRouteWords.length > 1) {
    formattedLowerName = formattedRouteWords
      .map((word, index) => {
        return index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
      })
      .join("");
    return formattedLowerName;
  }
  return formattedRouteWords.join("");
}

module.exports = getFormattedLowerName;
