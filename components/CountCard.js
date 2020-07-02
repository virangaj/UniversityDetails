import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const CountCard = (props) => {
  return (
    <View style={{ ...styles.card, ...props.card }}>
      {props.children}
      <Text style={{ ...styles.text, ...props.text }}>{props.title}</Text>
      <Text style={{ ...styles.value, ...props.valueStyle }}>
        {props.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    width: "90%",
    justifyContent: "center",

    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontSize: 14,
  },
  value: {
    color: Colors.bottomBar,
    fontSize: 25,
  },
});

export default CountCard;
