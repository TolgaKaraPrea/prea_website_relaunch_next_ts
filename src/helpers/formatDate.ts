export const formatDate = (date, language) => {
  const dateArr = date.split('.');
  const day = dateArr[0];
  const month = dateArr[1];
  const year = dateArr[2];

  return `${day}. ${month} ${year}`;
};
