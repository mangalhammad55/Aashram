import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export default function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Jai Guru Dev</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.loginContainer}>
          <Button
            style={styles.loginButton}
            color="#FF9933"
            title="Login"
          ></Button>
        </View>
        <View style={styles.signupContainer}>
          <Button
            style={styles.signupButton}
            color="#FF9933"
            title="Sign up"
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#FF9933",
    alignItems: "center",
    // justifyContent: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",

    alignItems: "center",
  },
  text: {
    position: "absolute",
    top: "45%",
    fontSize: 30,
  },
  loginContainer: {
    width: "95%",
  },
  loginButton: {
    textAlign: "center",
  },
  signupButton: {
    textAlign: "center",
  },
  signupContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: "95%",
  },
});
