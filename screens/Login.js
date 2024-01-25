import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.loginChild, styles.loginLayout]} />
      <Pressable
        style={[styles.loginItem, styles.loginLayout]}
        onPress={() => navigation.navigate("Otp")}
      />
      <Image
        style={styles.whatsappIcon}
        contentFit="cover"
        source={require("../assets/whatsapp.png")}
      />
      <Text style={[styles.loginAtauRegister, styles.loginFlexBox]}>
        login atau register menggunakan whatsapp
      </Text>
      <Text style={[styles.login1, styles.loginFlexBox]}>Login</Text>
      <Image
        style={styles.accessIcon}
        contentFit="cover"
        source={require("../assets/access.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 49,
    width: 332,
    borderWidth: 1,
    borderColor: Color.colorKhaki,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 29,
    position: "absolute",
  },
  loginFlexBox: {
    textAlign: "left",
    lineHeight: 28,
    position: "absolute",
  },
  loginChild: {
    top: 506,
    backgroundColor: Color.colorGray_300,
  },
  loginItem: {
    top: 572,
    backgroundColor: Color.colorKhaki,
  },
  whatsappIcon: {
    top: 514,
    left: 41,
    width: 33,
    height: 33,
    position: "absolute",
  },
  loginAtauRegister: {
    top: 516,
    left: 82,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorLightgray,
  },
  login1: {
    top: 582,
    left: 166,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.inknutAntiquaBold,
    color: Color.colorGray_200,
  },
  accessIcon: {
    top: 294,
    left: 147,
    width: 96,
    height: 96,
    position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorGray_300,
  },
});

export default Login;
