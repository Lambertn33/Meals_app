import { View, Text, StyleSheet } from "react-native";

const MealDetailsSubtitle = ({subtitle}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#fff",
    margin: 8,
    padding: 8,
    borderBottomWidth: 1,
  },
  subtitle: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "800",
    textAlign: "center",
    fontSize: 18,
  },
});

export default MealDetailsSubtitle;
