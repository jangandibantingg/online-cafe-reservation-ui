import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Text style={[styles.helloUserSapa, styles.basicTypo]}>
        Hello, User sapa cafe
      </Text>
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.qrCodeIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/qr-code.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.userIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <View style={styles.homeItem} />
      <View style={[styles.vectorParent, styles.vectorPosition]}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
      </View>
      <Pressable
        style={styles.userParent}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.userIcon1}
          contentFit="cover"
          source={require("../assets/user1.png")}
        />
        <Text style={[styles.profile, styles.home1Typo]}>Profile</Text>
      </Pressable>
      <Pressable
        style={[styles.vectorGroup, styles.vectorPosition]}
        onPress={() => navigation.navigate("Reservation")}
      >
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <View style={styles.reservationWrapper}>
          <Text style={[styles.reservation, styles.home1Typo]}>
            Reservation
          </Text>
        </View>
      </Pressable>
      <Text style={[styles.basic, styles.basicTypo]}>Basic</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </View>
      <View style={[styles.homeInner, styles.rectangleLayout]} />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Reservation")}
      />
      <View style={[styles.homeChild1, styles.homeChildLayout]} />
      <View style={[styles.homeChild2, styles.homeChildLayout]} />
      <View style={[styles.homeChild3, styles.homeChildLayout]} />
      <Image
        style={[styles.confettiIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/confetti1.png")}
      />
      <Text style={[styles.event, styles.basicTypo]}>Event</Text>
      <Text style={[styles.instagram, styles.outletTypo]}>Instagram</Text>
      <Text style={[styles.whatsapp, styles.outletTypo]}>Whatsapp</Text>
      <Text style={[styles.outlet, styles.outletTypo]}>Outlet</Text>
      <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
      <Text style={[styles.reservation1, styles.menuTypo]}>Reservation</Text>
      <Image
        style={[styles.menuBookIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/menu-book.png")}
      />
      <Image
        style={[styles.eventNoteIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/event-note2.png")}
      />
      <Image
        style={[styles.instagramIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/instagram.png")}
      />
      <Image
        style={[styles.whatsappIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/whatsapp1.png")}
      />
      <Image
        style={[styles.mapMarkerIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/map-marker.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  basicTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout2: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  vectorPosition: {
    bottom: "0.71%",
    top: "92.89%",
    height: "6.4%",
    position: "absolute",
  },
  vectorIconPosition: {
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  home1Typo: {
    color: Color.colorGray_100,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 286,
    position: "absolute",
  },
  groupLayout: {
    height: 237,
    width: 156,
    position: "absolute",
  },
  rectangleLayout: {
    height: 100,
    width: 100,
    borderRadius: Border.br_xs,
    top: 461,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  homeChildLayout: {
    top: 580,
    height: 100,
    width: 100,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  iconLayout1: {
    height: 44,
    width: 44,
    left: 54,
    position: "absolute",
  },
  outletTypo: {
    top: 642,
    textAlign: "left",
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  menuTypo: {
    top: 530,
    textAlign: "left",
    color: Color.colorLightgray,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    height: 45,
    width: 45,
  },
  iconPosition: {
    top: 597,
    position: "absolute",
  },
  helloUserSapa: {
    top: 60,
    color: Color.colorLightgray,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    left: 66,
  },
  homeChild: {
    top: 56,
    left: 19,
    width: 39,
    height: 39,
    position: "absolute",
  },
  qrCodeIcon: {
    top: 86,
    left: 294,
  },
  vectorIcon: {
    height: "2.61%",
    width: "4.62%",
    top: "7.58%",
    right: "10.51%",
    bottom: "89.81%",
    left: "84.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  userIcon: {
    top: 64,
    left: 27,
  },
  homeItem: {
    top: 768,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 390,
    height: 76,
    backgroundColor: Color.colorGray_200,
    left: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: "50%",
    width: "82.5%",
    right: "7.5%",
    bottom: "50%",
    left: "10%",
  },
  home1: {
    top: 23,
  },
  vectorParent: {
    width: "10.26%",
    right: "80%",
    left: "9.74%",
  },
  userIcon1: {
    left: 7,
    width: 30,
    height: 32,
    top: 0,
    position: "absolute",
  },
  profile: {
    top: 31,
  },
  userParent: {
    top: 775,
    left: 308,
    height: 62,
    width: 45,
    position: "absolute",
  },
  vectorIcon2: {
    height: "46.3%",
    width: "31.25%",
    right: "38.75%",
    bottom: "53.7%",
    left: "30%",
  },
  reservation: {
    top: 0,
  },
  reservationWrapper: {
    width: 80,
    height: 31,
    top: 23,
    left: 0,
    position: "absolute",
  },
  vectorGroup: {
    width: "20.51%",
    right: "39.23%",
    left: "40.26%",
  },
  basic: {
    top: 76,
    color: Color.colorKhaki,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
    left: 66,
  },
  groupChild: {
    left: 166,
    width: 292,
    top: 0,
  },
  groupItem: {
    top: 27,
    left: 468,
  },
  groupInner: {
    top: 37,
    left: 0,
  },
  rectangleParent: {
    top: 125,
    left: -119,
    width: 624,
  },
  homeInner: {
    left: 28,
  },
  rectangleView: {
    left: 145,
  },
  rectanglePressable: {
    left: 262,
  },
  homeChild1: {
    left: 28,
  },
  homeChild2: {
    left: 145,
  },
  homeChild3: {
    left: 262,
  },
  confettiIcon: {
    top: 490,
  },
  event: {
    top: 531,
    left: 59,
    color: Color.colorLightgray,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_xs,
  },
  instagram: {
    left: 47,
  },
  whatsapp: {
    left: 161,
  },
  outlet: {
    left: 291,
  },
  menu: {
    left: 174,
  },
  reservation1: {
    left: 274,
  },
  menuBookIcon: {
    top: 485,
    left: 173,
    position: "absolute",
    overflow: "hidden",
  },
  eventNoteIcon: {
    top: 486,
    left: 292,
    position: "absolute",
  },
  instagramIcon: {
    top: 598,
  },
  whatsappIcon: {
    left: 175,
    height: 45,
    width: 45,
  },
  mapMarkerIcon: {
    width: 46,
    height: 46,
    left: 292,
  },
  home: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Home;
