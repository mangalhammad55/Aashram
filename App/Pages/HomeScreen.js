import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  Image,
  Linking,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import App from "./Apps";

const DATA = [
  {
    id: "0",
    title: "Ank 1",
  },
  {
    id: "1",
    title: "Ank 2",
  },
  {
    id: "2",
    title: "Ank 3",
  },
  {
    id: "3",
    title: "Ank 4",
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => <Item id={item.id} title={item.title} />;
  const handleAnkButtonPress = (id) => {
    console.log(id);
  };
  const Item = ({ title, id }) => (
    <View onTouchStart={() => handleAnkButtonPress(id)} style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
      {/* <Button style={styles.titleButton} title={title}></Button> */}
    </View>
  );
  const handleWTAClick = () => {
    const url = "https://goo.gl/maps/7c7D7Skm7k4maXD76";
    Linking.openURL(url);
  };
  return (
    <SafeAreaView>
      <View style={styles.slider}>
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

        <Text style={styles.pawanSmaranText}>Pawan Smaran</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns="2"
        />
        <View style={styles.wayToAashramBtn}>
          <Button
            onPress={handleWTAClick}
            style={{ borderRadius: 20 }}
            title="way to aashram"
          ></Button>
        </View>
      </View>
    </SafeAreaView>
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
