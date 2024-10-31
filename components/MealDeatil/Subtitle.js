import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#321e1e",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#321e1e",
    borderBottomWidth: 2,
  },
});
