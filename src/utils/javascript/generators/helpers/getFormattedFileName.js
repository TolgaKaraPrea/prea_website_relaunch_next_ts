function getFormattedFileName(route, suffix) {
  let formattedRouteWords = route.split("-");
  if (formattedRouteWords.length === 1) {
    return formattedRouteWords[0].charAt(0).toUpperCase() + formattedRouteWords[0].slice(1);
  }

  if (formattedRouteWords.length !== 1) {
    return (
      formattedRouteWords
        .map((word, index) => {
          return word.charAt(0).toUpperCase() + formattedRouteWords[index].slice(1);
        })
        .join("") + suffix
    );
  }

  return formattedRouteWords.join("") || undefined;
}

module.exports = getFormattedFileName;
