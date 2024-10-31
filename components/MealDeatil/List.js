import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    marginVertical: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#381a1a",
    textAlign: "center",
  },
});
