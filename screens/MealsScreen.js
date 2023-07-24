import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsScreen = ({ route }) => {
  const { categoryId } = route.params;
  const categoryMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMeals = ({ item }) => {
    return <MealItem meal={item} />;
  };

  return (
    <FlatList
      data={categoryMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMeals}
    />
  );
};

export default MealsScreen;
