// "2024-01-19T09:00:00.000Z" to the format "January 12, 2023"

export const toLocaleDateString = (date: Date) => {
  return new Date(date).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
