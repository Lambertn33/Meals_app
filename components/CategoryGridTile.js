import { View, Text, StyleSheet, Pressable } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable style={styles.pressable}
       android_ripple={{ color: '#ccc' }}
       onPress={onPress}
      >
        <View style={styles.gridItemContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 4,
    elevation: 4,
    height: 150,
  },
  gridItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  pressable: {
    flex: 1,
    overflow: 'hidden'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default CategoryGridTile;
