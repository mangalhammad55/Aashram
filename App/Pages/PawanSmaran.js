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
  {
    id: "3",
    title: "Ank 4",
  },
  {
    id: "4",
    title: "Ank 5",
  },
  {
    id: "5",
    title: "Ank 6",
  },
  {
    id: "6",
    title: "Ank 7",
  },
  {
    id: "7",
    title: "Ank 8",
  },
  {
    id: "8",
    title: "Ank 9",
  },
];

export default function PawanSmaran({ navigation }) {
  const drawer = useRef(null);

  const renderItem = ({ item }) => <Item id={item.id} title={item.title} />;
  const handleAnkButtonPress = (id) => {
    console.log(id);
  };
  const Item = ({ title, id }) => (
    <View onTouchStart={() => handleAnkButtonPress(id)} style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  );

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
      <View>
        <Text style={styles.pawanSmaranText}>Pawan Smaran</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns="2"
        />
      </View>
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
