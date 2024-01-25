import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ContentCopy = () => {
  return (
    <View style={styles.contentCopy}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  contentCopy: {
    width: 33,
    height: 33,
    overflow: "hidden",
  },
});

export default ContentCopy;
