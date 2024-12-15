import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { ALL_CAR, FEATURE_FILTER } from "@/gql/cars/query";
import { Car, CarFilter } from "@/types/Car.type";
import {
  brandFilterData,
  categoriesFilterData,
  fullTypesFilterData,
} from "@/helpers/filter.helpers.options";

export const useCar = () => {
  const [filter, setFilter] = useState<CarFilter>({} as CarFilter);
  const [getCars, getCarRes] = useLazyQuery(ALL_CAR, {
    fetchPolicy: "network-only",
  });

  const [allCars, setAllCars] = useState<Array<Car>>([] as Array<Car>);
  const [getFeatureFilterFn, getFeatureFilterRes] =
    useLazyQuery(FEATURE_FILTER);

  const [brandFilter, setBrandFilter] = useState(brandFilterData);
  const [fullTypesFilter, setFullTypesFilter] =
    useState<Array<string>>(fullTypesFilterData);

  const [categoryFilter, setCategoryFilter] = useState(categoriesFilterData);

  useEffect(() => {
    console.log("update cars statements");
    if (!getCarRes.data) {
      console.log("statements cars https");

      // getCars();
    }
  }, [filter, setFilter, getCarRes.data, getCars]);

  useEffect(() => {
    console.log("final refact, ", filter);
    if (!getCarRes.data) {
      getCars({
        variables: {
          filter,
        },
      });
    }
  }, []);

  useEffect(() => {
    console.log("peticion http", filter);
    if (getCarRes.data) {
      setAllCars(getCarRes.data?.cars);
    }
  }, [getCarRes.data]);

  useEffect(() => {
    if (!getFeatureFilterRes.data) {
      getFeatureFilterFn();
    }
  }, [getFeatureFilterFn, getFeatureFilterRes.data]);

  const applyFilter = async (firstPetition?: any) => {
    if (firstPetition) {
      await getCars({
        variables: {
          filter: {
            ...firstPetition,
          },
        },
      });
      return;
    }
    console.log("filterrrr", filter);
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
    brandFilter,
    fullTypesFilter,
    categoryFilter,
    carsOptions: {
      data: allCars,
      loading: getCarRes.loading,
      error: getCarRes.error,
    },
    featureFilterOptions: {
      data: getFeatureFilterRes.data?.featureFilter,
      loading: getFeatureFilterRes.loading,
      error: getFeatureFilterRes.error,
    },
  };
};
