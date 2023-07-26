import { createContext, useState } from "react";

export const FavoriteMealsContext = createContext({
  ids: [],
  addMealToFavorites: (id) => {},
  removeMealFromFavorites: (id) => {},
});

const FavoriteMealsContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);

  const addMealToFavorites = (id) =>
    setFavMealIds((prevState) => [...prevState, id]);

  const removeMealFromFavorites = (id) =>
    setFavMealIds(favMealIds.filter((meal) => meal.id !== id));

  const contextValue = {
    ids: favMealIds,
    addMealToFavorites: addMealToFavorites,
    removeMealFromFavorites: removeMealFromFavorites,
  };
  return (
    <FavoriteMealsContext.Provider value={contextValue}>
      {children}
    </FavoriteMealsContext.Provider>
  );
};

export default FavoriteMealsContextProvider;
