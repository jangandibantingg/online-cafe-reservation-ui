import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Spalshscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.spalshscreen}
      onPress={() => navigation.navigate("Login")}
    >
      <Image
        style={styles.spalshscreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-181.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  spalshscreenChild: {
    position: "absolute",
    top: 318,
    left: 94,
    width: 203,
    height: 209,
  },
  spalshscreen: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Spalshscreen;
