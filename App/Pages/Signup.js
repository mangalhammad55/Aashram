import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Label,
  SafeAreaView,
} from "react-native";

export default function Signup({ navigation }) {
  const [name, setName] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();

  const loginButtonHandler = () => {
    navigation.navigate("Login");
  };

  const handleCreateAccount = () => {
    console.log(name, mobileNo, emailId, password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputField}
          onChangeText={setName}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={setMobileNo}
          value={mobileNo}
          placeholder="Mobile Number"
          autoComplete="tel-country-code"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={setEmailId}
          value={emailId}
          autoComplete="email"
          placeholder="Email "
        />
        <TextInput
          style={styles.inputField}
          onChangeText={setPassword}
          value={password}
          autoComplete="password"
          placeholder="Password"
        />
        <Button onPress={handleCreateAccount} title="Create Account"></Button>
      </View>
      <View style={styles.loginContainer}>
        <Button
          style={styles.loginButton}
          color="#FF9933"
          title="Login"
          onPress={loginButtonHandler}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: "95%",
  },
  form: {
    position: "absolute",
    top: 50,
    width: "95%",
  },
  inputField: {
    backgroundColor: "#FFFFFF",

    height: 40,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
  },
  loginButton: {
    textAlign: "center",
  },
});
