import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const navigateHandler = () => navigation.navigate("MealsScreen");

  const renderCategoryItem = ({ item }) => (
    <CategoryGridTile
      key={item.id}
      color={item.color}
      title={item.title}
      onPress={navigateHandler}
    />
  );
  
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
