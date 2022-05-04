function formatToNormalCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const formatUrlNormalNameCase = urlName => {
  if (urlName === "who-we-are") return "Who we are";
  if (urlName === "asset-classes") return "Asset Classes";
  const urlArr = urlName.split("-");
  if (urlArr.length === 1) return formatToNormalCase(urlArr[0]);

  const twoUrlArr = [];
  if (urlArr.length === 2) {
    urlArr.forEach(url => {
      twoUrlArr.push(formatToNormalCase(url));
    });
    return twoUrlArr.join(" & ");
  }
  return urlName;
};
