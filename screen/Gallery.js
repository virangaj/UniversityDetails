import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Colors from "../constants/colors";

export const assets = [
  require("../assets/1.jpg"),
  require("../assets/2.jpg"),
  require("../assets/3.jpg"),
  require("../assets/4.jpg"),
  require("../assets/5.jpg"),
  require("../assets/6.jpg"),
  require("../assets/7.jpg"),
];

const Gallery = (props) => {
  return (
    <View>
      <ScrollView snapToInterval={100} decelerationRate="fast" horizontal>
        {assets.map((source) => (
          <View key={source} style={styles.picture}>
            <Image {...{ source }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    height: 250,
    width: 350,
    marginHorizontal: 5,
    overflow: "scroll",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 10,
  },
});
export default Gallery;
