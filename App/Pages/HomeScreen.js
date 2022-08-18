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
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ank 1",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Ank 2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Ank 3",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Ank 4",
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    {/* <Text style={styles.title}>{title}</Text> */}
    <Button style={styles.titleButton} title={title}></Button>
  </View>
);
export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <Item onPress={handleAnkButtonPress(item.id)} title={item.title} />
  );
  const handleAnkButtonPress = (id) => {
    console.log(id);
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Jai Guru Dev</Text>
      </View>
      {/* <View style={styles.slider}>
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
      </View> */}
      <View>
        <Text style={styles.pawanSansmaranText}>Pawan Sansmaran</Text>
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
    width: 160,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#b3b3cc",
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
  pawanSansmaranText: {
    fontSize: 20,
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
