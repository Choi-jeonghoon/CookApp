import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { MealDetailScreen } from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

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
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meals Overview", // 현재 화면의 타이틀
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

const styles = StyleSheet.create({
  container: {},
});
