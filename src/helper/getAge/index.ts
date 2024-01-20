export const calculateAge = (date: Date) => {
  const currentDate = new Date();
  const birthDate = new Date(date);

  const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  let age = {
    year: yearDiff,
    month: monthDiff,
  };

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age.year--;
    age.month = 12 + monthDiff;
  }

  return age;
};

export const formatAge = (age: { year: number; month: number }): string => {
  const yearString =
    age.year > 0 ? `${age.year} ${age.year === 1 ? "year" : "years"}` : "";
  const monthString =
    age.month > 0 ? `${age.month} ${age.month === 1 ? "month" : "months"}` : "";

  if (yearString && monthString) {
    return `${yearString} and ${monthString}`;
  } else if (yearString) {
    return yearString;
  } else if (monthString) {
    return monthString;
  }
  return "Less than a month";
};
