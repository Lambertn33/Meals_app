import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const MealItem = ({ meal }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: '#ccc' }}>
        <View>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <View style={styles.mealItemFooter}>
          <Text style={styles.mealItemFooterItem}>{meal.duration}m</Text>
          <Text style={styles.mealItemFooterItem}>
            {meal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.mealItemFooterItem}>
            {meal.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
  },
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

export default MealItem;
