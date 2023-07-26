import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteMealsScreen from "./screens/FavoriteMealsScreen";

import "react-native-gesture-handler";
import FavoriteMealsContextProvider from "./context/FavoriteMealsContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#351401",
        headerStyle: {
          backgroundColor: "#351401",
        },
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerStyle: {
          backgroundColor: "#3f2f25",
        },
      }}
    >
      <Drawer.Screen name="categories" component={CategoriesScreen} />
      <Drawer.Screen name="favorites" component={FavoriteMealsScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteMealsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="CategoriesScreen"
            screenOptions={{
              title: "All Categories",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#351401",
              },
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen name="MealsScreen" component={MealsScreen} />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="CategoriesScreen"
              component={DrawerNavigation}
            />
            <Stack.Screen
              name="MealDetailsScreen"
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteMealsContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
