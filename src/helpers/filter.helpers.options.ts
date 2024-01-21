export const categoriesOptions = [
  { key: "compactos", value: "Compactos" },
  { key: "sedanes", value: "Sedanes" },
  { key: "coupes", value: "Coupés" },
  { key: "suv", value: "SUV" },
  { key: "furgonetas-minivan", value: "Furgonetas Miniván" },
  { key: "camionetas-pick-up", value: "Camionetas Pick-up" },
  { key: "deportivos", value: "Deportivos" },
  { key: "hibridos", value: "Híbridos" },
  { key: "electricos", value: "Eléctricos" },
  { key: "lujo", value: "Lujo" },
  { key: "descapotables-convertibles", value: "Descapotables / Convertibles" },
  { key: "crossovers", value: "Crossovers" },
];

export const fuelTypes = [
  "Gasolina",
  "Diesel",
  "Gas",
  "Electricidad",
  "Hidrógeno",
  "Hibrido",
];

export function buildQueryString(objeto: any) {
  const part = [];

  for (const clave in objeto) {
    if (
      objeto.hasOwnProperty(clave) &&
      objeto[clave] !== null &&
      objeto[clave] !== undefined
    ) {
      part.push(
        `${encodeURIComponent(clave)}=${encodeURIComponent(objeto[clave])}`
      );
    }
  }

  return part.join("&");
}
