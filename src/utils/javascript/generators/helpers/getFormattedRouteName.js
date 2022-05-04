function getFormattedRouteName(route) {
  let lowercasedRoute = route
    .split("")
    .map(routeLetter => routeLetter.toLowerCase())
    .join("");

  lowercasedRoute = lowercasedRoute.includes("_") ? lowercasedRoute.split("_").join("-") : lowercasedRoute;
  lowercasedRoute = lowercasedRoute.includes(".") ? lowercasedRoute.split(".").join("-") : lowercasedRoute;
  lowercasedRoute = lowercasedRoute.includes(" ") ? lowercasedRoute.split(" ").join("-") : lowercasedRoute;

  return lowercasedRoute;
}

module.exports = getFormattedRouteName;
