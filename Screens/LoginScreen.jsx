import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/bg.png")}
        style={styles.background}
      ></ImageBackground>
      <View style={styles.SecondContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.loginTitle}>Увійти</Text>

          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputPassword} placeholder="Пароль" />
            <Text style={styles.inputPasswordShow}>Показати</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Немає акаунту? Зареєструватися</Text>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
