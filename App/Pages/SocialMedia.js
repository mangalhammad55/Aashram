import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  Linking,
  DrawerLayoutAndroid,
  Image,
} from "react-native";

export default function SocialMedia({ navigation }) {
  const drawer = useRef(null);
  const handleYoutubeClick = () => {
    const url = "https://www.youtube.com/channel/UCykcDAktL2RvBe7ozuiILSA";
    Linking.openURL(url);
  };
  const handleIntagramClick = () => {
    const url = "";
    Linking.openURL(url);
  };
  const handleFacebookClick = () => {
    const url = "";
    Linking.openURL(url);
  };
  const drawerNavigation = () => (
    <View style={{ padding: 10 }}>
      <View style={styles.hamburgerButton}>
        <Button
          title="Home"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
      <View style={styles.hamburgerButton}>
        <Button
          title="Introduction"
          onPress={() => navigation.navigate("Introduction")}
        />
      </View>
      <View style={styles.hamburgerButton}>
        <Button
          title="Pawan Smaran"
          onPress={() => navigation.navigate("PawanSmaran")}
        />
      </View>
      <View style={styles.hamburgerButton}>
        <Button
          title="Location"
          onPress={() => navigation.navigate("Location")}
        />
      </View>
      <View style={styles.hamburgerButton}>
        <Button
          title="Social Media"
          onPress={() => navigation.navigate("SocialMedia")}
        />
      </View>
      <View style={styles.hamburgerButton}>
        <Button
          title="Aarti, strot"
          onPress={() => navigation.navigate("AartiStrot")}
        />
      </View>
      <View style={styles.hamburgerButton}>
        <Button
          title="About Us"
          onPress={() => navigation.navigate("AboutUs")}
        />
      </View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={drawerNavigation}
    >
      <Image
        style={{
          height: 40,
          width: 40,
          padding: 10,
          marginLeft: 10,
          marginTop: 10,
        }}
        onTouchStart={() => drawer.current.openDrawer()}
        source={require("../assets/menu2.png")}
      ></Image>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text style={{ marginBottom: 10, marginTop: 20 }}>
          Click below button to open Aashram's official youtube channel.
        </Text>
        <Image
          style={{
            height: 40,
            width: 200,
            marginLeft: 90,
          }}
          onTouchStart={handleYoutubeClick}
          source={require("../assets/youtube.png")}
        ></Image>
        {/* <Button onPress={handleYoutubeClick} title="youtube"></Button> */}
        <Text style={{ marginBottom: 10, marginTop: 20 }}>
          Click below button to open Aashram's Intagram handle.
        </Text>
        <Image
          style={{ height: 50, width: 200, marginLeft: 90 }}
          onTouchStart={handleIntagramClick}
          source={require("../assets/instagram.png")}
        ></Image>
        <Text style={{ marginBottom: 10, marginTop: 20 }}>
          Click below button to open Aashram's Facebook page.
        </Text>
        <Image
          style={{ height: 50, width: 200, marginLeft: 90 }}
          onTouchStart={handleFacebookClick}
          source={require("../assets/facebook.png")}
        ></Image>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  hamburgerButton: {
    marginTop: 10,
  },
});
