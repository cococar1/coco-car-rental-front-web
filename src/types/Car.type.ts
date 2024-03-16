export enum TypeChange {
  manual = "manual",
  automatica = "automatica",
  semiautomatica = "semiautomatica",
  dobleEmbrague = "dobleEmbrague",
  manualAutomatizada = "manualAutomatizada",
}
export interface Car {
  _id: string;
  name: string;
  image: string;
  countPerson: number;
  typeChange: string | TypeChange;
  minTankQuantity: number;
  maxTankQuantity: number;
  fullType: string;
  subTitle: string;
  description: string;
  price: any;
  createdAt: number;
  updatedAt: number;
  availability: boolean;
  published: boolean;
  brand: string;
  model: string;
  pickupTime: string;
  features: string[];
  licensePlate: string;
}

export interface CarHookType {
  setFilter: any;
  brandFilter: string[];
  filter: CarFilter;
  fullTypesFilter: string[];
  categoryFilter: string[];
  applyFilter: () => void;
  getCars: (options: any) => void;
  carsOptions: {
    data: Car[] | any;
    loading: boolean;
    error: any;
  };
  featureFilterOptions: {
    data: string[];
    loading: boolean;
    error: any;
  };
}

export interface FilterBookingInput {
  pickupDate: Date | string;

  returnDate: Date | string;
}

export interface CarFilter {
  countPerson: number;

  typeChange: string[] | TypeChange[];

  fullType: string[];

  brand: string;

  model: string;

  features: string[];

  price: FilterPriceInput | any;

  booking: FilterBookingInput;
}

export interface FilterPriceInput {
  min: number;

  max: number;
}
