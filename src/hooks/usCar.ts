import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { ALL_CAR } from "@/gql/cars/query";
import { CarFilter } from "@/types/Car.type";

export const useCar = () => {
  const [filter, setFilter] = useState<CarFilter>({} as CarFilter);
  const [getCars, getCarRes] = useLazyQuery(ALL_CAR);

  useEffect(() => {
    if (
      !getCarRes.data
      // || !getPlansRes.data.plans.length
    ) {
      console.log(filter);
      getCars();
    }
    console.log(getCarRes.data)
  }, [filter, setFilter, getCarRes.data, getCars]);

  const applyFilter = async () => {
    console.log("filterrrr");
    console.log(filter);
    await getCars({
      variables: {
        filter,
      },
    });
  };
  return {
    setFilter,
    filter,
    getCars,
    applyFilter,
    carsOptions: {
      data: getCarRes.data?.cars,
      loading: getCarRes.loading,
      error: getCarRes.error,
    },
  };
};
