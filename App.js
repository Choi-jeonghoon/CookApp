import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
//import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import store from "./store/redux/store";

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
        drawerContentStyle: { backgroundColor: "#715f5f" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "#654848", //드로우 선택한
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* contextAPI */}
        {/* <FavoritesContextProvider> */}
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
                // title: "All Categories ", // 현재 화면의 타이틀
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
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}
