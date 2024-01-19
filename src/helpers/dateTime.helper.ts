export const getDateFromFinalDate = (date: string) => {
  return date.split("T")[0];
};

export const getTimeFromFinalDate = (date: string) => {
  return date.split("T")[1];
};
