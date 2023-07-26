import { View, Text, StyleSheet } from "react-native";

const MealItemFooter = ({ duration, complexity, affordability, itemColor }) => {
  return (
    <View style={styles.mealItemFooter}>
      <Text style={[styles.mealItemFooterItem, itemColor]}>{duration}m</Text>
      <Text style={[styles.mealItemFooterItem, itemColor]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.mealItemFooterItem, itemColor]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItemFooter: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    padding: 8,
  },
  mealItemFooterItem: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MealItemFooter;
