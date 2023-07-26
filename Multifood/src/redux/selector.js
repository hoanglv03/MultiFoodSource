import { createSelector } from "@reduxjs/toolkit";
export const restaurantsSelector = state => state.restaurants
export const foodsSelector = state => state.foods
export const searchFilterSelector = state => state.searchFilter.search
export const listFilterSelector = createSelector(
    restaurantsSelector,
    searchFilterSelector,
    foodsSelector,
    (restaurants, search, foods) => {
      const list = [...restaurants, ...foods];
      if (search === '') {
        return {};
      }
      return list.filter(list => {
        return (
          list.nameFood?.toLowerCase().includes(search.toLowerCase()) ||
          list.nameRestaurants?.toLowerCase().includes(search.toLowerCase())
        );
      });
    },
  );
  