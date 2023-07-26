import { FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useEffect } from "react";
import MealItem from "../components/MealItem";

const MealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const categoryMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

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
      data={categoryMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMeals}
    />
  );
};

export default MealsScreen;
