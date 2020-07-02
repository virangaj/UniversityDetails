import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";

const Societies = (props) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Card details="perabeats" card={styles.card} text={styles.text} />
        <Card details="Rotaract" card={styles.card} text={styles.text} />
      </View>
      <View style={styles.cardContainer}>
        <Card details="CSUP" card={styles.card} text={styles.text} />
        <Card details="SeDS PERA" card={styles.card} text={styles.text} />
      </View>
      <View style={styles.cardContainer}>
        <Card details="AIESEC" card={styles.card} text={styles.text} />
        <Card details="Sports Council" card={styles.card} text={styles.text} />
      </View>
      <View style={styles.fullContainer}>
        <Card
          details="Buddhist Brotherhood"
          card={styles.fullCard}
          text={styles.text}
        />
        <Card
          details="Computer Society"
          card={styles.fullCard}
          text={styles.text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fullContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "45%",
    backgroundColor: Colors.bottomBar,
    height: 10,
  },
  text: {
    color: "white",
  },
  fullCard: { width: "75%", backgroundColor: Colors.bottomBar, height: 10 },
});

export default Societies;
