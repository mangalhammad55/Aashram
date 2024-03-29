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

export default function AboutUs({ navigation }) {
  const drawer = useRef(null);
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
      <View style={{ padding: 10 }}>
        <Text style={{ marginBottom: 10, marginTop: 20, fontSize: 20 }}>
          This is informative application which contains the information related
          to Ambika Aashram Balipur Dham.
          {"\n"}
          {"\n"}
          {"\n"}For any query contact here{"\n"}
          babajibalipur11@gmail.com
        </Text>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  hamburgerButton: {
    marginTop: 10,
  },
});
