import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const signupButtonHandler = () => {
    navigation.navigate("Signup");
  };

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  const handleLogin = () => {
    setLoading(true);
    console.log(userId, password, "idpass");

    signInWithEmailAndPassword(auth, userId, password)
      .then((userCredential) => {
        // Signed in
        console.log("loginsuccess");
        console.log(userCredential, "user creds");
        const user = userCredential.user;
        // ...
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, " login error");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("login completea");
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center" }}
          size="large"
          color="#FF9933"
        />
      ) : (
        <>
          <View style={styles.loginForm}>
            <TextInput
              style={styles.inputField}
              onChangeText={setUserId}
              value={userId}
              placeholder="User Id"
            />
            <TextInput
              style={styles.inputField}
              onChangeText={setPassword}
              value={password}
              autoComplete="password"
              placeholder="Password"
            />
            <Button
              style={styles.loginButton}
              onPress={handleLogin}
              title="login"
            />
          </View>
          <View style={styles.signupContainer}>
            <Button
              style={styles.signupButton}
              color="#FF9933"
              title="Sign up"
              onPress={signupButtonHandler}
            ></Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
  },
  loginForm: {
    position: "absolute",
    top: 50,
    width: "95%",
  },
  inputField: {
    backgroundColor: "#FFFFFF",
    //width: 250,
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
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
