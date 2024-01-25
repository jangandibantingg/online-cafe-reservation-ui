import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Invoice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.invoice}>
      <View style={[styles.keyboardBackspaceParent, styles.keyboardLayout]}>
        <Pressable
          style={[styles.keyboardBackspace, styles.rectangleWrapperPosition]}
          onPress={() => navigation.navigate("Confirmasi")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/keyboard-backspace.png")}
          />
        </Pressable>
        <Text style={[styles.reservation, styles.paymentTypo]}>
          Reservation
        </Text>
      </View>
      <Text style={styles.table4}>Table 4</Text>
      <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <View style={[styles.groupInner, styles.groupLayout1]} />
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.moneyTransferIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/money-transfer.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={styles.downPayment}>Down Payment</Text>
        <Text style={[styles.wed27Dec, styles.wed27DecTypo]}>
          Wed, 27 Dec 2023
        </Text>
        <Text style={[styles.capacity, styles.wed27DecTypo]}>Capacity</Text>
        <Text style={[styles.idr300000, styles.pm1030Typo]}>IDR 300,000,-</Text>
        <Image
          style={[styles.tableIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/table.png")}
        />
        <Text style={[styles.orang, styles.orangClr]}>10 orang</Text>
        <View style={[styles.rectangleView, styles.groupLayout1]} />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.jumlahOrang, styles.wed27DecTypo]}>
          Jumlah orang
        </Text>
        <Text style={[styles.orang1, styles.orangClr]}>8 orang</Text>
        <Image
          style={[styles.eventNoteIcon, styles.invoiceChildPosition]}
          contentFit="cover"
          source={require("../assets/event-note.png")}
        />
        <Text style={[styles.pm1030, styles.textTypo]}>
          08.00 PM - 10.30 PM
        </Text>
        <Image
          style={[styles.peopleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/people.png")}
        />
      </View>
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("Success")}
      >
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild4, styles.groupLayout]} />
        </View>
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
      </Pressable>
      <View style={[styles.invoiceChild, styles.invoiceChildPosition]} />
      <Text style={[styles.text, styles.textTypo]}>1784744958498989845</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>15:00</Text>
      <Text style={[styles.andaAkanDialihkan, styles.textTypo]}>
        anda akan dialihkan apabila pembayarab berhasil
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardLayout: {
    height: 36,
    position: "absolute",
  },
  rectangleWrapperPosition: {
    left: 0,
    top: 0,
  },
  paymentTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  groupLayout1: {
    height: 80,
    backgroundColor: Color.colorGray_200,
    width: 328,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    width: 22,
    left: 27,
    position: "absolute",
  },
  wed27DecTypo: {
    left: 73,
    fontSize: FontSize.size_2xs,
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  pm1030Typo: {
    fontSize: FontSize.size_3xs,
    left: 73,
  },
  orangClr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
  },
  invoiceChildPosition: {
    left: 31,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 95,
    width: 95,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  keyboardBackspace: {
    width: 36,
    top: 0,
    height: 36,
    position: "absolute",
  },
  reservation: {
    top: 3,
    left: 139,
    color: "transparent",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inknutAntiquaRegular,
  },
  keyboardBackspaceParent: {
    top: 48,
    width: 219,
    left: 19,
  },
  table4: {
    top: 99,
    left: 37,
    color: Color.colorKhaki,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  payment: {
    top: 51,
    left: 168,
    color: Color.colorLightgray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inknutAntiquaRegular,
  },
  groupChild: {
    top: 80,
  },
  groupItem: {
    borderTopLeftRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_2xs,
    top: 0,
  },
  groupInner: {
    top: 160,
  },
  ellipseIcon: {
    top: 101,
    height: 39,
    width: 39,
    left: 19,
  },
  groupChild1: {
    top: 181,
    left: 19,
  },
  moneyTransferIcon: {
    top: 109,
  },
  groupChild2: {
    left: 22,
    top: 21,
  },
  downPayment: {
    fontSize: FontSize.size_2xs,
    left: 72,
    top: 101,
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  wed27Dec: {
    top: 21,
  },
  capacity: {
    top: 175,
  },
  idr300000: {
    top: 116,
    color: Color.colorLightgray,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  tableIcon: {
    top: 189,
  },
  orang: {
    top: 195,
    left: 72,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  rectangleView: {
    top: 240,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_2xs,
  },
  groupChild3: {
    top: 261,
    left: 19,
  },
  jumlahOrang: {
    top: 255,
  },
  orang1: {
    top: 275,
    left: 72,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  eventNoteIcon: {
    top: 30,
    width: 21,
    height: 21,
  },
  pm1030: {
    top: 35,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_3xs,
    left: 73,
  },
  peopleIcon: {
    top: 269,
  },
  rectangleParent: {
    top: 130,
    height: 320,
    width: 328,
    left: 31,
    position: "absolute",
  },
  groupChild4: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_200,
    width: 95,
    top: 0,
    left: 0,
  },
  rectangleWrapper: {
    top: 0,
    left: 0,
  },
  image5Icon: {
    top: 7,
    left: 6,
    width: 82,
    height: 83,
    position: "absolute",
  },
  groupParent: {
    top: 479,
    left: 155,
  },
  invoiceChild: {
    top: 593,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorKhaki,
    borderWidth: 1,
    width: 332,
    height: 49,
  },
  text: {
    top: 603,
    left: 111,
    fontSize: FontSize.size_sm,
    color: Color.colorLightgray,
  },
  vectorIcon: {
    height: "3.59%",
    width: "6.69%",
    top: "71.45%",
    right: "11.77%",
    bottom: "24.96%",
    left: "81.54%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text1: {
    top: 650,
    left: 180,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
  },
  andaAkanDialihkan: {
    top: 671,
    left: 60,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
  },
  invoice: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Invoice;
