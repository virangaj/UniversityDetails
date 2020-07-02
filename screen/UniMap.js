import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Colors from "../constants/colors";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
const UniMap = (props) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 7.258243,
          longitude: 80.599557,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 7.258243, longitude: 80.599557 }}
          title={"University of Peradeniya"}
        />
      </MapView>
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
