import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";
export const faculties = [
  "Faculty of Agriculture",
  "Faculty of Allied Health Science",
  "Faculty of Arts",
  "Faculty of Dental Science",
  "Faculty of Engineering",
  "Faculty of Management",
  "Faculty of Medicine",
  "Faculty of Science",
  "Faculty of Veterinary Medicine & Animal Science",
];
const Faculty = (props) => {
  return (
    <View style={styles.cardContainer}>
      {faculties.map((source) => (
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
    borderColor: Colors.bottomBar,
    borderWidth: 1,
    width: "80%",
    height: 10,
  },
  text: {
    color: Colors.bottomBar,
    fontSize: 14,
    textAlign: "center",
  },
});

export default Faculty;
