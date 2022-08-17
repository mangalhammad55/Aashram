import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import { Icon } from "react-native-vector-icons/icon";

export default function Login({ navigation }) {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const signupButtonHandler = () => {
    navigation.navigate("Signup");
  };
  const handleLogin = () => {
    console.log(userId, password);

    signInWithEmailAndPassword(auth, userId, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(true);
        setErrMessage("Invalid User Credentials.");
      });
  };
  const toggleSwitch = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputField}
          onChangeText={setUserId}
          value={userId}
          placeholder="User Id"
          error={err}
          errMessage={errMessage}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={showPassword}
          textContentType="password"
        />
        {/* <Switch onValueChange={toggleSwitch} value={showPassword} /> */}

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
  form: {
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
