import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";

export const eventsHeld = [
  "Freshers' Meet",
  "Faculty Piritha",
  "Faculty Padura",
  "Faculty Meet",
  "Game Night",
  "OpenDay by perabeats",
];

const Events = (props) => {
  return (
    <View style={styles.cardContainer}>
      {eventsHeld.map((source) => (
        <Card
          key={source}
          card={styles.card}
          details={source}
          text={styles.text}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    borderColor: Colors.green,
    borderWidth: 1,
    width: "80%",
    height: 10,
  },
  text: {
    color: Colors.green,
    fontSize: 14,
    textAlign: "center",
  },
});

export default Events;
