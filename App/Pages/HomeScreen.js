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
      {/* <SafeAreaView> */}
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
        {/* <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        /> */}

        <SliderBox
          sliderBoxHeight={200}
          images={[
            "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "https://i.ytimg.com/vi/_uX7dYe329c/hqdefault.jpg",
            "https://i.ytimg.com/vi/W42bC3OP_tQ/maxresdefault.jpg",
            "https://i.ytimg.com/vi/7MBxgR2P7qQ/maxresdefault.jpg",
          ]}
          dotColor="#FF9933"
          inactiveDotColor="#90A4AE"
          autoplay
          circleLoop
          ImageComponentStyle={{ borderRadius: 15, width: "97%" }}
          imageLoadingColor="#FF9933"
        />
      </View>
      {/* </SafeAreaView> */}
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
    width: 160,
    height: 45,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#b3b3cc",
    backgroundColor: "#FF9933",
  },
  hamburgerButton: {
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  titleButton: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    textAlign: "center",
    color: "#FF9933",
    paddingTop: 10,
  },
  pawanSmaranText: {
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 10,
    color: "#FF9933",
  },
  wayToAashramBtn: {
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
  },
  slider: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
