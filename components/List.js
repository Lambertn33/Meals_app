import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return (
    <View>
      {data.map((d) => {
        return (
          <View key={d} style={styles.listItemContainer}>
            <Text style={styles.listItem} key={d}>
              {d}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: "#fff",
    padding: 4,
    margin: 8,
    borderRadius: 4,
  },
  listItem: {
    fontWeight: "800",
    textAlign: "center",
  },
});
export default List;
