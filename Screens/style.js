import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 812,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  SecondContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    width: "100%",
    height: 549,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 16,
    paddingRight: 16,
  },
  containerAvatar: {
    maxWidth: 132,
    maxHeight: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  innerBox: {
    width: 120,
    height: 120,
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: 108,
  },
  circleContainer: {
    width: 25,
    height: 25,
    left: 108,
    top: 80,
    position: "absolute",
  },
  circle: {
    width: 25,
    height: 25,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#FF6C00",
    fontSize: 15,
    lineHeight: 13,
    bottom: -2,
  },

  registrationTitle: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
    marginTop: 92,
  },
  loginTitle: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 32,
    marginTop: 32,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#E8E8E8",
    marginTop: 16,
    paddingLeft: 16,
  },
  inputPassword: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#E8E8E8",
    marginTop: 16,
    position: "relative",
    paddingLeft: 16,
  },
  inputPasswordShow: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
    position: "absolute",
    right: 20,
    top: 30,
  },
  button: {
    width: 343,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  loginText: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});
