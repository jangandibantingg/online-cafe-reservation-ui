import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Success = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.success}>
      <View style={[styles.keyboardBackspaceParent, styles.keyboardLayout]}>
        <Pressable
          style={[styles.keyboardBackspace, styles.keyboardLayout]}
          onPress={() => navigation.navigate("Invoice")}
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
      <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
      <Image
        style={styles.checkmarkIcon}
        contentFit="cover"
        source={require("../assets/checkmark.png")}
      />
      <Text style={styles.terimkasihPembayaranSudah}>
        Terimkasih, pembayaran sudah kami terima
      </Text>
      <Text style={[styles.success1, styles.success1Typo]}>success</Text>
      <Pressable
        style={styles.successChild}
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={[styles.kembaliKeBeranda, styles.success1Typo]}>
        kembali ke beranda
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardLayout: {
    height: 36,
    position: "absolute",
  },
  paymentTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  success1Typo: {
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    lineHeight: 28,
    textAlign: "left",
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
  payment: {
    top: 51,
    left: 168,
    color: Color.colorLightgray,
  },
  checkmarkIcon: {
    top: 226,
    left: 151,
    width: 87,
    height: 87,
    position: "absolute",
  },
  terimkasihPembayaranSudah: {
    top: 340,
    left: 73,
    color: Color.colorWhite,
    lineHeight: 28,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    position: "absolute",
  },
  success1: {
    top: 303,
    left: 164,
    fontSize: FontSize.size_sm,
    color: Color.colorKhaki,
  },
  successChild: {
    top: 397,
    left: 130,
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorKhaki,
    width: 130,
    height: 49,
    position: "absolute",
  },
  kembaliKeBeranda: {
    top: 408,
    left: 138,
    color: Color.colorGray_200,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
  },
  success: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Success;
