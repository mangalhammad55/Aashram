import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
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
  const handleAnkButtonPress = (id = 0) => {
    console.log(id);
  };
  const Item = ({ title, id }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <Button
        onPress={() => handleAnkButtonPress(id)}
        style={styles.titleButton}
        title={title}
        color="#2173f3"
      ></Button>
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

        <Text style={styles.pawanSmaranText}>Pawan Smaran</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns="2"
        />
        <App></App>
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
    width: "40%",
    height: 50,
    // borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "#b3b3cc",
  },
  titleButton: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    textAlign: "center",
    color: "#FF9933",
    paddingTop: 10,
  },
  pawanSmaranText: {
    fontSize: 24,
    paddingLeft: 20,
    paddingTop: 10,
  },
  pawanSansmaranButton: {
    width: "20px",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
