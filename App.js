import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationsScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
function App() {
  return (
    <View style={styles.container}>
      {/* <RegistrationsScreen /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
