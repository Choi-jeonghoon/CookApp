import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { MealDetailScreen } from "./screens/MealDetailScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#9f8383" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#715f5f" },
        headerBackTitle: "Back",
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#9f8383" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#715f5f" },
            headerBackTitle: "Back",
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories ", // 현재 화면의 타이틀
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //     headerBackTitle: "Back",
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap Me" />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
