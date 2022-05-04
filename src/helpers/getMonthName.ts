import { useRouter } from "next/router";

const monthNameLookUp = (lang, monthNum) => {
  let monthLookup = {};

  if (lang === "en") {
    monthLookup = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      10: "October",
      11: "November",
      12: "December"
    };
  }
  if (lang === "de") {
    monthLookup = {
      "01": "Januar",
      "02": "Februar",
      "03": "März",
      "04": "April",
      "05": "Mai",
      "06": "Juni",
      "07": "Juli",
      "08": "August",
      "09": "September",
      10: "Oktober",
      11: "November",
      12: "Dezember"
    };
  }

  return monthLookup[monthNum] || undefined;
};

export const GetMonthName = monthNum => {
  const { locale } = useRouter();
  return monthNameLookUp(locale, monthNum);
};
