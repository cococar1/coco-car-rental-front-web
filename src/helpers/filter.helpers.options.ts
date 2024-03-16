export const categoriesFilterData = [
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

export const fullTypesFilterData = [
  "Gasolina",
  "Diesel",
  "Gas",
  "Electricidad",
  "Hidrógeno",
  "Hibrido",
];

export const brandFilterData = [
  { key: "toyota", value: "Toyota" },
  { key: "ford", value: "Ford" },
  { key: "honda", value: "Honda" },
  { key: "chevrolet", value: "Chevrolet" },
  { key: "nissan", value: "Nissan" },
  { key: "volkswagen", value: "Volkswagen" },
  { key: "bmw", value: "BMW" },
  { key: "mercedes_benz", value: "Mercedes-Benz" },
  { key: "audi", value: "Audi" },
  { key: "hyundai", value: "Hyundai" },
  { key: "kia", value: "Kia" },
  { key: "mazda", value: "Mazda" },
  { key: "subaru", value: "Subaru" },
  { key: "lexus", value: "Lexus" },
  { key: "tesla", value: "Tesla" },
  { key: "renault", value: "Renault" },
  { key: "peugeot", value: "Peugeot" },
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
