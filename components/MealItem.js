import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { MealDetails } from "./MealDetails";

export const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "gray" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    elevation: 4, //안드로이드 그림자 효과
    //IOS 그림자 효과 ( 주의 사항: 백그라운드 색상을 해줘야 적용된다. )
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    //갤럭시 에서는 보더를했을떄 화면꽉채우는 효과 주기위해서 및 ios 적용을 위해
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
