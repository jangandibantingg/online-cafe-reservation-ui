const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Otp from "./screens/Otp";
import ContentCopy from "./components/ContentCopy";
import Success from "./screens/Success";
import Invoice from "./screens/Invoice";
import Confirmasi from "./screens/Confirmasi";
import SelectTable from "./screens/SelectTable";
import Profile from "./screens/Profile";
import SelectDate from "./screens/SelectDate";
import Login from "./screens/Login";
import Spalshscreen from "./screens/Spalshscreen";
import Rectangle from "./components/Rectangle";
import Reservation from "./screens/Reservation";
import Rectangle1 from "./components/Rectangle1";
import Rectangle2 from "./components/Rectangle2";
import Rectangle3 from "./components/Rectangle3";
import Home from "./screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InknutAntiqua-Light": require("./assets/fonts/InknutAntiqua-Light.ttf"),
    "InknutAntiqua-Regular": require("./assets/fonts/InknutAntiqua-Regular.ttf"),
    "InknutAntiqua-Bold": require("./assets/fonts/InknutAntiqua-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Invoice"
              component={Invoice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmasi"
              component={Confirmasi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectTable"
              component={SelectTable}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectDate"
              component={SelectDate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Spalshscreen"
              component={Spalshscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reservation"
              component={Reservation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
