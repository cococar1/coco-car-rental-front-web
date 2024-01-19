export interface Car {
  _id: string;
  name: string;
  image: string;
  countPerson: number;
  typeChange: string;
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
