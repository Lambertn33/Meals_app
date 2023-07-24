import { View, Text } from "react-native";

const MealsScreen = ({ route }) => {
  const { categoryId } = route.params;
  return (
    <View>
      <Text>Meals Screen - {categoryId}</Text>
    </View>
  );
};

export default MealsScreen;
