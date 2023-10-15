import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config/firebase";

const img = require("../../assets/backImage.png");

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [userName, setUserName] = useState("");

  const registerHandler = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, password, email)
        .then(() => console.log("Registartion successful"))
        .catch((err) => Alert.alert("Something wrong", err.message));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Register</Text>
        {/* <TextInput
          style={styles.input}
          placeholder="Full Name"
          autoCapitalize="none"
          keyboardType="default"
          value={email}
          onChangeText={(text) => setEmail(text)}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={registerHandler}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.text1}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text2}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="default" />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#A084DC",
    alignSelf: "center",
    fontWeight: "bold",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "80%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#A084DC",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  bottom: {
    flexDirection: "row",
    paddingTop: 30,
    alignSelf: "center",
  },
  text1: {
    fontSize: 16,
    color: "#666",
    marginRight: 10,
  },
  text2: {
    fontSize: 16,
    color: "#A084DC",
  },
});
