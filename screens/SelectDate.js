import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SelectDate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectdate}>
      <View style={[styles.keyboardBackspaceParent, styles.keyboardLayout]}>
        <Pressable
          style={[styles.keyboardBackspace, styles.keyboardLayout]}
          onPress={() => navigation.navigate("Reservation")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/keyboard-backspace.png")}
          />
        </Pressable>
        <Text style={styles.reservation}>Reservation</Text>
      </View>
      <Pressable
        style={[styles.selectdateChild, styles.selectdateChildLayout2]}
        onPress={() => navigation.navigate("SelectTable")}
      />
      <View style={[styles.selectdateItem, styles.selectdateLayout]} />
      <View style={[styles.selectdateInner, styles.selectdateLayout]} />
      <View style={[styles.rectangleView, styles.selectdateChildLayout2]} />
      <View style={[styles.selectdateChild1, styles.selectdateChildLayout2]} />
      <View style={[styles.selectdateChild2, styles.selectdateLayout]} />
      <Text style={[styles.pm1030, styles.bandTypo1]}>08.00 PM - 10.30 PM</Text>
      <Text style={[styles.pm10301, styles.bandTypo]}>08.00 PM - 10.30 PM</Text>
      <Text style={[styles.pm10302, styles.bandTypo]}>08.00 PM - 10.30 PM</Text>
      <Text style={[styles.pm10303, styles.pm10303Typo]}>
        08.00 PM - 10.30 PM
      </Text>
      <Text style={[styles.pm10304, styles.bandTypo1]}>
        08.00 PM - 10.30 PM
      </Text>
      <Text style={[styles.pm10305, styles.bandTypo]}>08.00 PM - 10.30 PM</Text>
      <Image
        style={[styles.rectangleIcon, styles.selectdateChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={[styles.selectdateChild3, styles.selectdateChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={[styles.selectdateChild4, styles.selectdateChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={[styles.selectdateChild5, styles.selectdateChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={[styles.selectdateChild6, styles.selectdateChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={[styles.selectdateChild7, styles.selectdateChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Text style={[styles.wed27Dec, styles.wed27Typo]}>Wed, 27 dec 2023</Text>
      <Text style={[styles.wed30Dec, styles.wed27Typo]}>Wed, 30 dec 2023</Text>
      <Text style={[styles.wed28Dec, styles.wed27Typo]}>Wed, 28 dec 2023</Text>
      <Text style={[styles.wed31Dec, styles.wed27Typo]}>Wed, 31 dec 2023</Text>
      <Text style={[styles.wed29Dec, styles.wed27Typo]}>Wed, 29 dec 2023</Text>
      <Text style={[styles.wed27Dec1, styles.wed27Typo]}>Wed, 27 dec 2023</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.bandInfo, styles.bandTypo1]}>Band Info</Text>
      <Text style={[styles.bandInfo1, styles.bandTypo]}>Band Info</Text>
      <Text style={[styles.bandInfo2, styles.bandTypo]}>Band Info</Text>
      <Text style={[styles.bandInfo3, styles.pm10303Typo]}>Band Info</Text>
      <Text style={[styles.bandInfo4, styles.bandTypo1]}>Band Info</Text>
      <Text style={[styles.bandInfo5, styles.bandTypo]}>Band Info</Text>
      <Text style={styles.selectReservationDate}>Select Reservation Date</Text>
      <Image
        style={[styles.confettiIcon, styles.confettiIconLayout]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={[styles.confettiIcon1, styles.confettiIconPosition]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={[styles.confettiIcon2, styles.confettiIconPosition]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={[styles.confettiIcon3, styles.confettiIconLayout]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={[styles.confettiIcon4, styles.confettiIconLayout]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={[styles.confettiIcon5, styles.confettiIconPosition]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardLayout: {
    height: 36,
    position: "absolute",
  },
  selectdateChildLayout2: {
    height: 127,
    width: 360,
    borderWidth: 1,
    borderColor: Color.colorKhaki,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  selectdateLayout: {
    left: 14,
    height: 127,
    width: 360,
    borderWidth: 1,
    borderColor: Color.colorKhaki,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  bandTypo1: {
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_3xs,
    left: 167,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  bandTypo: {
    left: 166,
    color: Color.colorGainsboro_100,
    lineHeight: 28,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  pm10303Typo: {
    left: 165,
    color: Color.colorGainsboro_100,
    lineHeight: 28,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  selectdateChildLayout1: {
    height: 80,
    width: 87,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  selectdateChildLayout: {
    left: 31,
    height: 80,
    width: 87,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  wed27Typo: {
    color: Color.colorKhaki,
    fontSize: FontSize.size_sm,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "4.62%",
    height: "2.13%",
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "34.36%",
    right: "61.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "4.62%",
    height: "2.13%",
    overflow: "hidden",
    position: "absolute",
  },
  confettiIconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  confettiIconPosition: {
    left: 134,
    height: 18,
    width: 18,
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
    height: 36,
    position: "absolute",
  },
  reservation: {
    top: 5,
    textAlign: "left",
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    left: 136,
    position: "absolute",
  },
  keyboardBackspaceParent: {
    top: 48,
    width: 216,
    left: 19,
    height: 36,
    position: "absolute",
  },
  selectdateChild: {
    top: 146,
    left: 15,
    width: 360,
    borderWidth: 1,
    borderColor: Color.colorKhaki,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_sm,
  },
  selectdateItem: {
    top: 574,
  },
  selectdateInner: {
    top: 288,
  },
  rectangleView: {
    top: 716,
    left: 13,
  },
  selectdateChild1: {
    top: 431,
    left: 15,
    width: 360,
    borderWidth: 1,
    borderColor: Color.colorKhaki,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_sm,
  },
  selectdateChild2: {
    top: 859,
  },
  pm1030: {
    top: 222,
  },
  pm10301: {
    top: 650,
  },
  pm10302: {
    top: 364,
  },
  pm10303: {
    top: 792,
  },
  pm10304: {
    top: 507,
  },
  pm10305: {
    top: 935,
  },
  rectangleIcon: {
    top: 170,
    left: 32,
    height: 80,
    width: 87,
    borderRadius: Border.br_8xs,
  },
  selectdateChild3: {
    top: 598,
  },
  selectdateChild4: {
    top: 312,
  },
  selectdateChild5: {
    top: 740,
    left: 30,
  },
  selectdateChild6: {
    top: 455,
    left: 32,
    height: 80,
    width: 87,
    borderRadius: Border.br_8xs,
  },
  selectdateChild7: {
    top: 883,
  },
  wed27Dec: {
    top: 164,
    left: 137,
    color: Color.colorKhaki,
    fontSize: FontSize.size_sm,
  },
  wed30Dec: {
    top: 592,
    left: 136,
    color: Color.colorKhaki,
    fontSize: FontSize.size_sm,
  },
  wed28Dec: {
    top: 306,
    left: 136,
    color: Color.colorKhaki,
    fontSize: FontSize.size_sm,
  },
  wed31Dec: {
    top: 734,
    left: 135,
  },
  wed29Dec: {
    top: 449,
    left: 137,
    color: Color.colorKhaki,
    fontSize: FontSize.size_sm,
  },
  wed27Dec1: {
    top: 877,
    left: 136,
    color: Color.colorKhaki,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    top: "26.9%",
    bottom: "70.97%",
    left: "34.62%",
    right: "60.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "4.62%",
    height: "2.13%",
  },
  vectorIcon1: {
    top: "77.61%",
    bottom: "20.26%",
  },
  vectorIcon2: {
    top: "43.72%",
    bottom: "54.15%",
  },
  vectorIcon3: {
    top: "94.43%",
    right: "61.28%",
    bottom: "3.44%",
    left: "34.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "4.62%",
    height: "2.13%",
  },
  vectorIcon4: {
    top: "60.66%",
    bottom: "37.2%",
    left: "34.62%",
    right: "60.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "4.62%",
    height: "2.13%",
  },
  vectorIcon5: {
    top: "111.37%",
    bottom: "-13.51%",
  },
  bandInfo: {
    top: 195,
  },
  bandInfo1: {
    top: 623,
  },
  bandInfo2: {
    top: 337,
  },
  bandInfo3: {
    top: 765,
  },
  bandInfo4: {
    top: 480,
  },
  bandInfo5: {
    top: 908,
  },
  selectReservationDate: {
    top: 94,
    fontWeight: "700",
    fontFamily: FontFamily.inknutAntiquaBold,
    lineHeight: 28,
    textAlign: "left",
    color: Color.colorLightgray,
    fontSize: FontSize.size_xs,
    left: 19,
    position: "absolute",
  },
  confettiIcon: {
    top: 200,
    left: 135,
  },
  confettiIcon1: {
    top: 628,
  },
  confettiIcon2: {
    top: 342,
  },
  confettiIcon3: {
    top: 770,
    left: 133,
  },
  confettiIcon4: {
    top: 485,
    left: 135,
  },
  confettiIcon5: {
    top: 913,
  },
  selectdate: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default SelectDate;
