export const getCharAmountOfContent = (charAmount, content) => {
  const shortendContent = content
    ?.split("")
    .map((word, index) => index <= charAmount && word)
    .filter(Boolean)
    .join("");

  return `${shortendContent}...`;
};
