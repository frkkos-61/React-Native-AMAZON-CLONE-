import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#bbe8ef", "#bdeee9", "#c3f1e3"]}
    >
      <Feather name="map-pin" size={16} color={"#0000000"} />
      <Text style={styles.trabzon}> Trabzon to Turkey - 61000 </Text>
      <SimpleLineIcons name="arrow-down" color={"#0000000"} size={10} />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  trabzon: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2c4341",
    paddingHorizontal: 5,
  },
});
