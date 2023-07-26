import { useEffect } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItemFooter from "../components/MealItemFooter";
import List from "../components/List";
import MealDetailsSubtitle from "../components/MealDetailsSubtitle";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const mealDetails = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: mealTitle,
    });
  }, [navigation, mealId]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: mealDetails.imageUrl }} />
      <Text style={styles.title}>{mealDetails.title}</Text>
      <MealItemFooter
        affordability={mealDetails.affordability}
        complexity={mealDetails.complexity}
        duration={mealDetails.duration}
        itemColor={styles.MealItemFooterItem}
      />
      <View style={styles.mealDetailsContainer}>
        <View style={styles.mealDetails}>
          <MealDetailsSubtitle subtitle="Ingredients" />
          <List data={mealDetails.ingredients} />
          <MealDetailsSubtitle subtitle="Steps" />
          <List data={mealDetails.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  MealItemFooterItem: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    padding: 12,
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "800",
  },
  mealDetailsContainer: {
    alignItems: "center",
  },
  mealDetails: {
    width: "80%",
  },
});

export default MealDetailsScreen;
