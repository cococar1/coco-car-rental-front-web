import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { ALL_CAR } from "@/gql/cars/query";
import { CarFilter } from "@/types/Car.type";

export const useCar = () => {
  const [filter, setFilter] = useState({} as CarFilter);
  const [getCars, getCarRes] = useLazyQuery(ALL_CAR);

  useEffect(() => {
    if (
      !getCarRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getCars();
    }
  }, [filter, setFilter, getCarRes.data, getCars]);

  return {
    setFilter,
    filter,
    getCars,
    carsOptions: {
      data: getCarRes.data?.cars,
      loading: getCarRes.loading,
      error: getCarRes.error,
    },
  };
};
