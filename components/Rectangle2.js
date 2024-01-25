import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Rectangle2 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: Color.colorGray_300,
    width: 175,
    height: 65,
  },
});

export default Rectangle2;
