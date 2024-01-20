export const dateToTime = (date: Date) => {
  if (!(date instanceof Date)) {
    return "";
  }

  const localTimeString = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return localTimeString;
};