export const FormatDate = (timestamp: string) => {
  const milliseconds = parseInt(timestamp, 10); // Parseamos el timestamp a número entero
  const date = new Date(milliseconds); // Creamos la fecha con los milisegundos

  // Verificamos si la fecha es válida
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Formateamos la fecha
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};
