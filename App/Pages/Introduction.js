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

export default function Introduction({ navigation }) {
  const drawer = useRef(null);
  const [showBabajiIntro, setShowBabajiIntro] = useState(true);
  const [showYogeshjiIntro, setShowBYogeshjiIntro] = useState(false);
  const [showShudhakarjiIntro, setShowShudhakarjiIntro] = useState(false);

  const handleBabajiClick = () => {
    setShowBabajiIntro(true);
    setShowBYogeshjiIntro(false);
    setShowShudhakarjiIntro(false);
  };
  const handleYogeshjiClick = () => {
    setShowBabajiIntro(false);
    setShowBYogeshjiIntro(true);
    setShowShudhakarjiIntro(false);
  };
  const handleShudhakarjiClick = () => {
    setShowBabajiIntro(false);
    setShowBYogeshjiIntro(false);
    setShowShudhakarjiIntro(true);
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
      <View>
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
      </View>
      <View style={{ padding: 10, marginTop: 10 }}>
        <Button
          style={{ marginBottom: 10, marginTop: 20 }}
          title="Baba ji"
          onPress={handleBabajiClick}
        ></Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          style={{ marginBottom: 10, marginTop: 20 }}
          title="Yogeshwar maharaj ji"
          onPress={handleYogeshjiClick}
        ></Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          style={{ marginBottom: 10, marginTop: 20 }}
          title="Shudhakar maharaj ji"
          onPress={handleShudhakarjiClick}
        ></Button>
      </View>
      <View style={{ padding: 10 }}>
        {showBabajiIntro ? <Text>Babaji</Text> : null}
        {showYogeshjiIntro ? <Text>yogesh ji</Text> : null}
        {showShudhakarjiIntro ? <Text>shudhakar ji</Text> : null}
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  hamburgerButton: {
    marginTop: 10,
  },
  slider: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
