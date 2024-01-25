import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Confirmasi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmasi}>
      <View style={[styles.keyboardBackspaceParent, styles.keyboardLayout]}>
        <Pressable
          style={[styles.keyboardBackspace, styles.keyboardLayout]}
          onPress={() => navigation.navigate("SelectTable")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/keyboard-backspace.png")}
          />
        </Pressable>
        <Text style={[styles.reservation, styles.reservationTypo]}>
          Reservation
        </Text>
      </View>
      <Text style={[styles.table4, styles.textTypo]}>Table 4</Text>
      <Text style={[styles.minimumCharge, styles.wed27DecTypo]}>
        Minimum Charge
      </Text>
      <Text style={[styles.idr300000, styles.wed27DecTypo]}>IDR 300,000,-</Text>
      <View style={[styles.confirmasiChild, styles.confirmasiLayout]} />
      <View style={[styles.confirmasiItem, styles.confirmasiLayout]} />
      <View style={[styles.confirmasiInner, styles.confirmasiLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.confirmasiChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.confirmasiChild1, styles.confirmasiChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.moneyTransferIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/money-transfer.png")}
      />
      <Image
        style={[styles.confirmasiChild2, styles.wed27DecPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.downPayment, styles.wed27DecTypo]}>
        Down Payment
      </Text>
      <Text style={[styles.wed27Dec, styles.wed27DecPosition]}>
        Wed, 27 Dec 2023
      </Text>
      <Text style={[styles.capacity, styles.wed27DecTypo]}>Capacity</Text>
      <Text style={[styles.idr3000001, styles.orangTypo]}>IDR 300,000,-</Text>
      <Image
        style={[styles.tableIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/table.png")}
      />
      <Text style={[styles.orang, styles.orangTypo]}>10 orang</Text>
      <Text style={[styles.confirmation, styles.reservationTypo]}>
        Confirmation
      </Text>
      <Text style={[styles.jumlahOrang, styles.textTypo]}>Jumlah orang</Text>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>4</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>5</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>6</Text>
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>7</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>8</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text, styles.textTypo]}>9</Text>
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
        </View>
      </View>
      <Pressable
        style={[styles.rectanglePressable, styles.confirmasiChild3Layout]}
        onPress={() => navigation.navigate("SelectTable")}
      />
      <Pressable
        style={[styles.confirmasiChild3, styles.confirmasiChild3Layout]}
        onPress={() => navigation.navigate("Invoice")}
      />
      <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
      <Text style={[styles.reserve, styles.cancelTypo]}>Reserve</Text>
      <Image
        style={styles.eventNoteIcon}
        contentFit="cover"
        source={require("../assets/event-note.png")}
      />
      <Text style={[styles.pm1030, styles.orangTypo]}>08.00 PM - 10.30 PM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardLayout: {
    height: 36,
    position: "absolute",
  },
  reservationTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorKhaki,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  wed27DecTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorLightgray,
    textAlign: "left",
  },
  confirmasiLayout: {
    height: 80,
    width: 328,
    left: 31,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  confirmasiChildLayout: {
    height: 39,
    width: 39,
  },
  iconLayout: {
    height: 22,
    width: 22,
    left: 58,
    position: "absolute",
  },
  wed27DecPosition: {
    top: 206,
    position: "absolute",
  },
  orangTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  groupParentLayout: {
    height: 31,
    width: 31,
    top: 0,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 36,
    height: 31,
    width: 31,
    position: "absolute",
  },
  confirmasiChild3Layout: {
    height: 49,
    width: 130,
    borderRadius: Border.br_smi,
    top: 653,
    position: "absolute",
  },
  cancelTypo: {
    top: 664,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    textAlign: "left",
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
    left: 0,
  },
  reservation: {
    top: 3,
    left: 139,
    color: "transparent",
  },
  keyboardBackspaceParent: {
    top: 48,
    left: 19,
    width: 219,
  },
  table4: {
    top: 103,
    left: 169,
  },
  minimumCharge: {
    top: 127,
    left: 141,
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  idr300000: {
    top: 146,
    left: 154,
    color: Color.colorLightgray,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  confirmasiChild: {
    top: 265,
  },
  confirmasiItem: {
    top: 185,
    borderTopLeftRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_2xs,
  },
  confirmasiInner: {
    top: 345,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_2xs,
  },
  ellipseIcon: {
    left: 50,
    height: 39,
    width: 39,
    position: "absolute",
    top: 286,
  },
  confirmasiChild1: {
    top: 366,
    left: 50,
    height: 39,
    width: 39,
    position: "absolute",
  },
  moneyTransferIcon: {
    top: 294,
  },
  confirmasiChild2: {
    left: 53,
    height: 39,
    width: 39,
  },
  downPayment: {
    left: 103,
    top: 286,
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  wed27Dec: {
    left: 104,
    color: Color.colorLightgray,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
  },
  capacity: {
    top: 360,
    left: 104,
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  idr3000001: {
    top: 301,
    left: 104,
    color: Color.colorLightgray,
  },
  tableIcon: {
    top: 374,
  },
  orang: {
    top: 380,
    color: Color.colorWhite,
    left: 103,
  },
  confirmation: {
    top: 51,
    left: 150,
    color: Color.colorLightgray,
  },
  jumlahOrang: {
    top: 477,
    left: 149,
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    backgroundColor: Color.colorGray_200,
    left: 0,
  },
  text: {
    left: 12,
    top: 0,
  },
  rectangleParent: {
    left: 0,
  },
  rectangleContainer: {
    left: 36,
  },
  groupView: {
    left: 72,
  },
  rectangleParent1: {
    left: 108,
  },
  rectangleParent2: {
    left: 144,
  },
  rectangleParent3: {
    left: 0,
  },
  rectangleParent5: {
    left: 36,
  },
  rectangleParent6: {
    left: 72,
  },
  rectangleParent7: {
    left: 108,
  },
  text11: {
    left: 8,
    top: 0,
  },
  rectangleParent8: {
    left: 144,
  },
  groupParent: {
    top: 517,
    width: 175,
    height: 67,
    left: 108,
    position: "absolute",
  },
  rectanglePressable: {
    left: 49,
    backgroundColor: Color.colorGray_200,
  },
  confirmasiChild3: {
    left: 205,
    backgroundColor: Color.colorKhaki,
  },
  cancel: {
    left: 92,
    color: Color.colorLightgray,
  },
  reserve: {
    left: 245,
    color: Color.colorBlack,
  },
  eventNoteIcon: {
    top: 215,
    left: 62,
    width: 21,
    height: 21,
    position: "absolute",
  },
  pm1030: {
    top: 220,
    lineHeight: 28,
    color: Color.colorGainsboro_100,
    left: 104,
  },
  confirmasi: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Confirmasi;
