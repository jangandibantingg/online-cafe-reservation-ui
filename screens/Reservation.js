import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Reservation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reservation}>
      <View style={[styles.keyboardBackspaceParent, styles.keyboardLayout]}>
        <Pressable
          style={[styles.keyboardBackspace, styles.keyboardLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/keyboard-backspace.png")}
          />
        </Pressable>
        <Text style={styles.reservation1}>Reservation</Text>
      </View>
      <Pressable
        style={styles.reservationChild}
        onPress={() => navigation.navigate("SelectDate")}
      />
      <Text style={[styles.pm1030, styles.pm1030Typo]}>
        08.00 PM - 10.30 PM
      </Text>
      <Image
        style={styles.reservationItem}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Text style={styles.sapaCafeSukabumi}>Sapa Cafe Sukabumi</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.jlSelabintanaKm, styles.pm1030Typo]}>
        JL. Selabintana KM 7 ..
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardLayout: {
    height: 36,
    position: "absolute",
  },
  pm1030Typo: {
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_3xs,
    left: 171,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  keyboardBackspace: {
    left: 0,
    top: 0,
    width: 36,
  },
  reservation1: {
    top: 3,
    left: 139,
    fontSize: FontSize.size_xs,
    color: Color.colorLightgray,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  keyboardBackspaceParent: {
    top: 50,
    left: 15,
    width: 219,
  },
  reservationChild: {
    top: 138,
    left: 19,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorKhaki,
    borderWidth: 1,
    width: 360,
    height: 127,
    position: "absolute",
  },
  pm1030: {
    top: 214,
  },
  reservationItem: {
    top: 162,
    left: 36,
    borderRadius: Border.br_8xs,
    width: 87,
    height: 80,
    position: "absolute",
  },
  sapaCafeSukabumi: {
    top: 156,
    left: 141,
    fontSize: FontSize.size_sm,
    color: Color.colorKhaki,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.37%",
    width: "3.59%",
    top: "22.51%",
    right: "60.26%",
    bottom: "75.12%",
    left: "36.15%",
  },
  vectorIcon1: {
    height: "2.13%",
    width: "4.62%",
    top: "25.95%",
    right: "59.74%",
    bottom: "71.92%",
    left: "35.64%",
  },
  jlSelabintanaKm: {
    top: 187,
  },
  reservation: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Reservation;
