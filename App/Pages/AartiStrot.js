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

export default function AartiStrot({ navigation }) {
  const drawer = useRef(null);
  const [showAarti, setShowAarti] = useState(false);
  const [showStrot, setShowStrot] = useState(false);
  const handleAartiClick = () => {
    setShowStrot(false);
    setShowAarti(true);
  };
  const handleStrotClick = () => {
    setShowAarti(false);
    setShowStrot(true);
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
      <View style={{ padding: 10, marginTop: 10 }}>
        <Button
          style={{ marginBottom: 10, marginTop: 20 }}
          title="Aarti"
          onPress={handleAartiClick}
        ></Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          style={{ marginBottom: 10, marginTop: 20 }}
          title="Strot"
          onPress={handleStrotClick}
        ></Button>
      </View>
      <View>
        {showAarti ? <Text>aarti</Text> : null}
        {showStrot ? <Text>stort</Text> : null}
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  hamburgerButton: {
    marginTop: 10,
  },
});
