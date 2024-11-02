import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MealsList } from "../components/MealList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  return favoriteMeals.length === 0 ? (
    <View style={styles.noFavoritesContainer}>
      <Text style={styles.noFavoritesText}>즐겨찾기 내역이 없습니다</Text>
    </View>
  ) : (
    <MealsList items={favoriteMeals} />
  );
};

const styles = StyleSheet.create({
  noFavoritesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavoritesText: {
    fontSize: 18,
    color: "gray",
  },
});
