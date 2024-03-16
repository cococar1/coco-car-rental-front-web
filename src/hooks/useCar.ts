import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { ALL_CAR, FEATURE_FILTER } from "@/gql/cars/query";
import { CarFilter } from "@/types/Car.type";
import {
  brandFilterData,
  categoriesFilterData,
  fullTypesFilterData,
} from "@/helpers/filter.helpers.options";

export const useCar = () => {
  const [filter, setFilter] = useState<CarFilter>({} as CarFilter);
  const [getCars, getCarRes] = useLazyQuery(ALL_CAR);

  const [getFeatureFilterFn, getFeatureFilterRes] =
    useLazyQuery(FEATURE_FILTER);

  const [brandFilter, setBrandFilter] = useState(brandFilterData);
  const [fullTypesFilter, setFullTypesFilter] =
    useState<Array<string>>(fullTypesFilterData);

  const [categoryFilter, setCategoryFilter] = useState(categoriesFilterData);

  useEffect(() => {
    if (
      !getCarRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getCars();
    }
  }, [filter, setFilter, getCarRes.data, getCars]);

  useEffect(() => {
    if (!getFeatureFilterRes.data) {
      getFeatureFilterFn();
    }
  }, [getFeatureFilterFn, getFeatureFilterRes.data]);

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
    brandFilter,
    fullTypesFilter,
    categoryFilter,
    carsOptions: {
      data: getCarRes.data?.cars,
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
