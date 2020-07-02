import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <SafeAreaView style={styles.topView}>
      <Image source={require("../assets/logo.png")} style={styles.img} />

      <Text style={styles.header}>University of Peradeniya</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topView: {
    backgroundColor: Colors.maroon,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 5,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  img: {
    width: 100,
    resizeMode: "contain",
    height: 100,
  },
});
export default Header;
