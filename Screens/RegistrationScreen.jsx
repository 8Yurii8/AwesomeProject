import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
const RegistrationsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/bg.png")}
        style={styles.background}
      ></ImageBackground>
      <View style={styles.SecondContainer}>
        <View style={styles.formContainer}>
          <View style={styles.containerAvatar}>
            <View style={styles.innerBox}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}>
                  <Text style={styles.plusText}>+</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.registrationTitle}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputPassword} placeholder="Пароль" />
            <Text style={styles.inputPasswordShow}>Показати</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
        </View>
      </View>
    </View>
  );
};
export default RegistrationsScreen;
