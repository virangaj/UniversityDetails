import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import Societies from "./screen/Societies";
import Events from "./screen/Events";
import Faculty from "./screen/Faculty";
import People from "./screen/People";
import Gallery from "./screen/Gallery";
import Ranking from "./screen/Ranking";

import Colors from "./constants/colors";
export default function App() {
  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView>
        <View style={styles.viewArea}>
          <Card
            details="Ranking"
            card={styles.RankBox}
            text={styles.RankText}
          />
          <Ranking />
        </View>
        <View style={styles.viewArea}>
          <Card
            details="Blooming Beauty of PERA"
            card={styles.picBox}
            text={styles.picText}
          />
        </View>
        <Gallery />
        <View style={styles.viewArea}>
          <Card
            details="Faculties"
            card={styles.topicCard}
            text={styles.topicText}
          />
        </View>

        <Faculty />
        <View style={styles.viewArea}>
          <People />
        </View>
        <View style={styles.viewArea}>
          <Card
            details="Events"
            card={styles.topicCard}
            text={styles.topicText}
          />
          <Events />
          <Card
            details="Leading social Communities"
            card={styles.topicCard}
            text={styles.topicText}
          />
          <Societies />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  viewArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  topicCard: {
    backgroundColor: Colors.purple,
    height: 50,
    marginBottom: 5,
  },
  topicText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  RankBox: {
    backgroundColor: Colors.gold,
    width: "95%",
    height: 50,
    marginBottom: 5,
  },
  RankText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  picBox: {
    backgroundColor: Colors.green,
    width: "95%",
    height: 50,
    marginBottom: 5,
  },
  picText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
