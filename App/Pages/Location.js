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

export default function Location({ navigation }) {
  const drawer = useRef(null);
  const handleWTAClick = () => {
    const url = "https://goo.gl/maps/7c7D7Skm7k4maXD76";
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
          title="Close drawer"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      // style={{ backgroundColor: "#ffffff" }}
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
      <View style={{ padding: 10, marginTop: 10 }}>
        <Text style={{ marginBottom: 10 }}>
          Click below button to open Aashram location on google map.
        </Text>
        <Button onPress={handleWTAClick} title="way to aashram"></Button>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  hamburgerButton: {
    marginTop: 10,
  },
});
