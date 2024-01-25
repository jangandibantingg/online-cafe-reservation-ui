import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile, styles.iconLayout]}>
      <View style={[styles.profileChild, styles.profileChildLayout]} />
      <View style={[styles.profileItem, styles.profileChildLayout]} />
      <Text style={[styles.myReservation, styles.logoutTypo]}>
        My Reservation
      </Text>
      <Pressable
        style={[styles.keyboardBackspaceParent, styles.keyboardLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Pressable
          style={[styles.keyboardBackspace, styles.keyboardLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/keyboard-backspace.png")}
          />
        </Pressable>
        <Text style={[styles.profile1, styles.profile1Typo]}>Profile</Text>
      </Pressable>
      <View style={styles.profileInner} />
      <Text style={[styles.helloUserSapa, styles.profile1Typo]}>
        Hello, User sapa cafe
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.profileChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.userIcon, styles.userIconLayout]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={[styles.userIcon1, styles.userIconPosition]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Text style={styles.text}>628511223344</Text>
      <Text style={[styles.account, styles.othersTypo]}>Account</Text>
      <Text style={[styles.others, styles.othersTypo]}>Others</Text>
      <View style={[styles.profileItem, styles.profileChildLayout]} />
      <Text style={[styles.myReservation, styles.logoutTypo]}>
        My Reservation
      </Text>
      <Image
        style={[styles.profileChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.eventNoteIcon, styles.userIconPosition]}
        contentFit="cover"
        source={require("../assets/event-note1.png")}
      />
      <View style={[styles.profileItem, styles.profileChildLayout]} />
      <Text style={[styles.myReservation, styles.logoutTypo]}>
        My Reservation
      </Text>
      <Text style={[styles.myProfile, styles.logoutTypo]}>My Profile</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.eventNoteIcon, styles.userIconPosition]}
        contentFit="cover"
        source={require("../assets/event-note1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.eventNoteIcon, styles.userIconPosition]}
        contentFit="cover"
        source={require("../assets/event-note1.png")}
      />
      <View style={[styles.profileChild4, styles.profileChild4Position]} />
      <Text style={[styles.setting, styles.logoutTypo]}>Setting</Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.automationIcon, styles.userIconPosition]}
        contentFit="cover"
        source={require("../assets/automation.png")}
      />
      <View style={[styles.profileChild5, styles.profileChildLayout]} />
      <Text style={[styles.contactUs, styles.logoutTypo]}>Contact Us</Text>
      <Image
        style={[styles.userIcon2, styles.userIconPosition]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.profileChild4Position]}
        onPress={() => navigation.navigate("Spalshscreen")}
      />
      <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.logoutRoundedIcon, styles.userIconPosition]}
        contentFit="cover"
        source={require("../assets/logout-rounded.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  profileChildLayout: {
    height: 54,
    width: 337,
    backgroundColor: Color.colorGray_200,
    left: 27,
    position: "absolute",
  },
  logoutTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    left: 84,
    position: "absolute",
  },
  keyboardLayout: {
    height: 36,
    position: "absolute",
  },
  profile1Typo: {
    color: Color.colorLightgray,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  userIconLayout: {
    height: 22,
    width: 22,
  },
  userIconPosition: {
    left: 44,
    position: "absolute",
  },
  othersTypo: {
    fontFamily: FontFamily.inknutAntiquaBold,
    fontWeight: "700",
    color: Color.colorKhaki,
    left: 37,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "86.67%",
    right: "9.74%",
    width: "3.59%",
    height: "2.61%",
    position: "absolute",
    overflow: "hidden",
  },
  profileChild4Position: {
    borderBottomLeftRadius: Border.br_smi,
    borderBottomRightRadius: Border.br_smi,
    height: 54,
    width: 337,
    backgroundColor: Color.colorGray_200,
    left: 27,
    position: "absolute",
  },
  profileChild: {
    top: 254,
    borderTopRightRadius: Border.br_smi,
    borderTopLeftRadius: Border.br_smi,
    height: 54,
  },
  profileItem: {
    top: 308,
  },
  myReservation: {
    top: 319,
  },
  icon: {
    height: "100%",
  },
  keyboardBackspace: {
    left: 0,
    top: 0,
    width: 36,
  },
  profile1: {
    top: 2,
    left: 154,
  },
  keyboardBackspaceParent: {
    top: 50,
    left: 19,
    width: 199,
  },
  profileInner: {
    top: 114,
    borderRadius: Border.br_smi,
    height: 82,
    width: 337,
    backgroundColor: Color.colorGray_200,
    left: 27,
    position: "absolute",
  },
  helloUserSapa: {
    top: 135,
    left: 84,
    color: Color.colorLightgray,
  },
  ellipseIcon: {
    top: 137,
    left: 37,
    height: 39,
    width: 39,
  },
  profileChild1: {
    top: 315,
    left: 36,
  },
  userIcon: {
    top: 145,
    left: 45,
    position: "absolute",
    width: 22,
  },
  userIcon1: {
    top: 269,
    height: 22,
    width: 22,
  },
  text: {
    top: 153,
    fontSize: FontSize.size_3xs,
    color: Color.colorKhaki,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    left: 84,
    position: "absolute",
  },
  account: {
    top: 213,
  },
  others: {
    top: 433,
  },
  vectorIcon: {
    top: "38.39%",
    bottom: "59%",
  },
  eventNoteIcon: {
    top: 323,
    width: 23,
    height: 23,
  },
  myProfile: {
    top: 265,
  },
  vectorIcon2: {
    top: "31.99%",
    bottom: "65.4%",
  },
  profileChild4: {
    top: 362,
  },
  setting: {
    top: 373,
  },
  vectorIcon4: {
    top: "44.79%",
    bottom: "52.61%",
  },
  automationIcon: {
    top: 378,
    height: 22,
    width: 22,
  },
  profileChild5: {
    top: 474,
    borderTopRightRadius: Border.br_smi,
    borderTopLeftRadius: Border.br_smi,
    height: 54,
  },
  contactUs: {
    top: 485,
  },
  userIcon2: {
    top: 489,
    height: 22,
    width: 22,
  },
  vectorIcon5: {
    top: "58.06%",
    bottom: "39.34%",
  },
  rectanglePressable: {
    top: 528,
  },
  logout: {
    top: 539,
  },
  vectorIcon6: {
    top: "64.45%",
    bottom: "32.94%",
  },
  logoutRoundedIcon: {
    top: 544,
    height: 22,
    width: 22,
  },
  profile: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 844,
  },
});

export default Profile;
