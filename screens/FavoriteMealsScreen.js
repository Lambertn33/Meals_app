import { FlatList } from "react-native";
import { useContext } from "react";
import { FavoriteMealsContext } from "../context/FavoriteMealsContext";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const FavoriteMealsScreen = ({ navigation }) => {
  const favMealCtx = useContext(FavoriteMealsContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favMealCtx.ids.includes(meal.id)
  );
  const navigateHandler = (mealId) => {
    navigation.navigate("MealDetailsScreen", {
      mealId,
    });
  };

  const renderMeals = ({ item }) => {
    return (
      <MealItem meal={item} onPress={navigateHandler.bind(this, item.id)} />
    );
  };

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMeals}
    />
  );
};

export default FavoriteMealsScreen;
