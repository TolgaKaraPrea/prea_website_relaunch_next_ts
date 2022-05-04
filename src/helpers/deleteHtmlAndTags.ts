export const deleteHtmlAndTags = content => {
  const regHTMLDetector = /(<([^>]+)>)/gi;
  let newContent = content.replace("&#8211;", "-");
  newContent = newContent.replace(regHTMLDetector, "");
  return newContent;
};
