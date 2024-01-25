import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SelectTable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectTable}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("SelectDate")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/keyboard-backspace.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image3}
        onPress={() => navigation.navigate("Confirmasi")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Text style={styles.reservation}>Reservation</Text>
      <Text style={styles.selectTable1}>Select Table</Text>
      <View style={styles.selectTableChild} />
      <View style={[styles.selectTableItem, styles.selectChildLayout2]} />
      <View style={[styles.selectTableInner, styles.selectChildLayout2]} />
      <View style={[styles.rectangleView, styles.selectChildPosition1]} />
      <View style={[styles.selectTableChild1, styles.selectChildPosition1]} />
      <View style={[styles.selectTableChild2, styles.selectChildPosition1]} />
      <View style={[styles.selectTableChild3, styles.selectChildPosition1]} />
      <View style={[styles.selectTableChild4, styles.selectChildLayout2]} />
      <View style={[styles.selectTableChild5, styles.selectChildLayout2]} />
      <View style={[styles.selectTableChild6, styles.selectChildLayout2]} />
      <View style={[styles.selectTableChild7, styles.selectChildLayout2]} />
      <View style={[styles.selectTableChild8, styles.selectChildPosition]} />
      <View style={[styles.selectTableChild9, styles.selectChildPosition]} />
      <View style={[styles.selectTableChild10, styles.selectChildLayout1]} />
      <View style={[styles.selectTableChild11, styles.selectChildLayout1]} />
      <View style={[styles.selectTableChild12, styles.selectChildLayout1]} />
      <View style={styles.selectTableChild13} />
      <Text style={styles.tableBookingDi}>
        1. Table Booking di sapa cafe berlaku pada hari senin, selasa, rabu,
        jumat, sabtu dan minggu, Pukul 18.00 sampai 21.30 dengan minimum charge,
        sebelum jam tersebut pengunjung bebas berkunjung tanpa minimum charge.
      </Text>
      <Text style={[styles.avaible, styles.soldTypo]}>Avaible</Text>
      <Text style={[styles.sold, styles.soldTypo]}>Sold</Text>
      <Image
        style={[styles.ellipseIcon, styles.selectChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.selectTableChild14, styles.selectChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={[styles.selected, styles.soldTypo]}>Selected</Text>
      <Image
        style={[styles.selectTableChild15, styles.selectChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectChildLayout2: {
    opacity: 0.5,
    height: 21,
    width: 20,
    position: "absolute",
  },
  selectChildPosition1: {
    top: 341,
    opacity: 0.5,
    backgroundColor: Color.colorTurquoise,
    height: 21,
    width: 20,
    position: "absolute",
  },
  selectChildPosition: {
    top: 387,
    opacity: 0.5,
    backgroundColor: Color.colorTurquoise,
    height: 21,
    width: 20,
    position: "absolute",
  },
  selectChildLayout1: {
    backgroundColor: Color.colorCrimson,
    opacity: 0.5,
    height: 21,
    width: 20,
    position: "absolute",
  },
  soldTypo: {
    top: 703,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  selectChildLayout: {
    height: 14,
    width: 14,
    top: 710,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 19,
    top: 48,
    width: 36,
    height: 36,
    position: "absolute",
  },
  image3: {
    left: 4,
    top: 144,
    width: 382,
    height: 507,
    position: "absolute",
  },
  reservation: {
    top: 51,
    left: 155,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  selectTable1: {
    top: 96,
    left: 23,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: FontFamily.inknutAntiquaBold,
    lineHeight: 28,
    textAlign: "left",
    color: Color.colorLightgray,
    position: "absolute",
  },
  selectTableChild: {
    backgroundColor: "#d9d9d9",
    height: 21,
    width: 20,
    left: 146,
    top: 292,
    position: "absolute",
  },
  selectTableItem: {
    backgroundColor: Color.colorTurquoise,
    opacity: 0.5,
    left: 258,
    top: 292,
  },
  selectTableInner: {
    left: 303,
    backgroundColor: Color.colorTurquoise,
    opacity: 0.5,
    top: 292,
  },
  rectangleView: {
    left: 303,
  },
  selectTableChild1: {
    left: 258,
  },
  selectTableChild2: {
    left: 146,
    top: 341,
  },
  selectTableChild3: {
    left: 191,
  },
  selectTableChild4: {
    top: 390,
    backgroundColor: Color.colorTurquoise,
    opacity: 0.5,
    left: 258,
  },
  selectTableChild5: {
    top: 469,
    left: 303,
    backgroundColor: Color.colorTurquoise,
    opacity: 0.5,
  },
  selectTableChild6: {
    top: 480,
    left: 345,
    backgroundColor: Color.colorTurquoise,
    opacity: 0.5,
  },
  selectTableChild7: {
    top: 495,
    left: 305,
    backgroundColor: Color.colorKhaki,
  },
  selectTableChild8: {
    left: 303,
  },
  selectTableChild9: {
    left: 348,
  },
  selectTableChild10: {
    left: 191,
    top: 292,
  },
  selectTableChild11: {
    top: 390,
    left: 191,
  },
  selectTableChild12: {
    left: 145,
    top: 390,
  },
  selectTableChild13: {
    top: 679,
    left: 11,
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorKhaki,
    borderWidth: 1,
    width: 371,
    height: 478,
    position: "absolute",
  },
  tableBookingDi: {
    top: 729,
    left: 26,
    width: 352,
    height: 142,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  avaible: {
    left: 75,
  },
  sold: {
    left: 147,
  },
  ellipseIcon: {
    left: 57,
  },
  selectTableChild14: {
    left: 129,
  },
  selected: {
    left: 202,
  },
  selectTableChild15: {
    left: 184,
  },
  selectTable: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default SelectTable;
