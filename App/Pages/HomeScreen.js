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
import { SliderBox } from "react-native-image-slider-box";

export default function HomeScreen({ navigation }) {
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
      <View style={styles.slider}>
        <SliderBox
          sliderBoxHeight={200}
          images={[
            "https://i.ytimg.com/vi/_uX7dYe329c/hqdefault.jpg",
            "https://i.ytimg.com/vi/W42bC3OP_tQ/maxresdefault.jpg",
            "https://i.ytimg.com/vi/7MBxgR2P7qQ/maxresdefault.jpg",
            "https://www.youtube.com/watch?v=7MBxgR2P7qQ",
          ]}
          dotColor="#FF9933"
          inactiveDotColor="#90A4AE"
          autoplay
          circleLoop
          ImageComponentStyle={{ borderRadius: 15, width: "97%" }}
          imageLoadingColor="#FF9933"
        />
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
