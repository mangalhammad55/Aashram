import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
  SafeAreaView,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function HomeScreen() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Jai Guru Dev</Text>
      </View>
      <View style={styles.slider}>
        <SliderBox
          sliderBoxHeight={200}
          images={[
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree",
          ]}
          dotColor="#FF9933"
          inactiveDotColor="#90A4AE"
          autoplay
          circleLoop
          ImageComponentStyle={{ borderRadius: 15, width: "97%" }}
          imageLoadingColor="#FF9933"
        />
      </View>

      {/* <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />
          <Text style={styles.paragraph}>
            Swipe from the side or press button below to see it!
          </Text>
          <Button
            title="Open drawer"
            onPress={() => drawer.current.openDrawer()}
          />
        </View>
      </DrawerLayoutAndroid> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 20,
    textAlign: "center",
    color: "#FF9933",
    paddingTop: 10,
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
