import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Otp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.otp, styles.otpLayout]}>
      <Text
        style={[
          styles.masukkinKodeVerivikasiContainer,
          styles.verifikasiLewatWhatsappClr,
        ]}
      >
        <Text
          style={styles.masukkinKodeVerivikasi}
        >{`Masukkin kode verivikasi yang dikirim ke nomor whatsapp `}</Text>
        <Text style={styles.textTypo}>+62811811811811</Text>
      </Text>
      <Text style={[styles.verifikasiLewatWhatsapp, styles.comfirmTypo]}>
        Verifikasi Lewat WhatsApp
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.icon, styles.otpLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.otpChild, styles.childBorder]}
        onPress={() => navigation.navigate("Home")}
      />
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.text1Position]} />
        <Text style={[styles.text1, styles.text1Position]}>1</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.text1Position]} />
        <Text style={[styles.text1, styles.text1Position]}>2</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.text1Position]} />
        <Text style={[styles.text1, styles.text1Position]}>3</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.text1Position]} />
        <Text style={[styles.text1, styles.text1Position]}>4</Text>
      </View>
      <Text style={[styles.comfirm, styles.comfirmTypo]}>Comfirm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  otpLayout: {
    overflow: "hidden",
    width: "100%",
  },
  verifikasiLewatWhatsappClr: {
    color: Color.colorLightgray,
    left: 21,
  },
  comfirmTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 28,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupLayout: {
    height: 31,
    width: 31,
  },
  text1Position: {
    top: 0,
    position: "absolute",
  },
  masukkinKodeVerivikasi: {
    fontWeight: "300",
    fontFamily: FontFamily.inknutAntiquaLight,
  },
  textTypo: {
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
  },
  masukkinKodeVerivikasiContainer: {
    top: 155,
    fontSize: FontSize.size_3xs,
    width: 292,
    textAlign: "left",
    lineHeight: 28,
    color: Color.colorLightgray,
    left: 21,
    position: "absolute",
  },
  verifikasiLewatWhatsapp: {
    top: 119,
    color: Color.colorLightgray,
    left: 21,
    fontSize: FontSize.size_sm,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "4.62%",
    top: "9%",
    right: "88.46%",
    bottom: "88.86%",
    width: "6.92%",
    height: "2.13%",
    position: "absolute",
  },
  otpChild: {
    top: 289,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorKhaki,
    borderColor: Color.colorKhaki,
    width: 332,
    height: 49,
    left: 18,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorGray_200,
    height: 31,
    width: 31,
    borderWidth: 1,
    borderStyle: "solid",
  },
  text1: {
    left: 12,
    fontSize: FontSize.size_xs,
    color: Color.colorKhaki,
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    textAlign: "left",
  },
  rectangleParent: {
    top: 223,
    width: 31,
    position: "absolute",
    left: 18,
  },
  rectangleGroup: {
    left: 54,
    top: 223,
    width: 31,
    position: "absolute",
  },
  rectangleContainer: {
    left: 90,
    top: 223,
    width: 31,
    position: "absolute",
  },
  groupView: {
    left: 126,
    top: 223,
    width: 31,
    position: "absolute",
  },
  comfirm: {
    top: 299,
    left: 162,
    color: Color.colorGray_200,
  },
  otp: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 844,
  },
});

export default Otp;
