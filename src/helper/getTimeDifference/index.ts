export const getTimeDifference = (start: Date, end: Date) => {
  if (!start && !end) return;
  const timeDifference = end.getTime() - start.getTime();
  const minutesDifference = timeDifference / (1000 * 60);

  return minutesDifference;
};
