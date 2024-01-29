export const getDateFromFinalDate = (date: string | Date) => {
  return date ? date.toString().split("T")[0] : "";
};

export const getTimeFromFinalDate = (date: string | Date) => {
  return date ? date.toString().split("T")[1] : "";
};