import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Colors from "../constants/colors";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const UniMap = (props) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default UniMap;
