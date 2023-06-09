import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
export default function Maps() {
  const [location, setLocation] = useState({
    pickupCords: {
      latitude: 21.033333,
      longitude: 105.85,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCors: {
      latitude: 10.8,
      longitude: 106.65,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const { pickupCords, dropLocationCors } = location;
  const [draggableMakerCoord, setdraggableMakerCoord] = useState({
    latitude: 21.033333,
    longitude: 105.85,
  });
  let locationsOfInteresst = [
    {
      title: "Hai Bà Trưng",
      location: {
        latitude: 21.00804438937846,
        longitude: 105.84945894360557,
      },
      des: "Đánh dấu",
    },
    {
      title: "Đống đa",
      location: {
        latitude: 21.018047687533105,
        longitude: 105.81894433003545,
      },
      des: "Đánh dấu",
    },
  ];
  //xác định tọa độ th đổi
  const onRegionChange = (region) => {
    //console.log(region);
  };
  //
  const showLocationsOfInterest = () => {
    return locationsOfInteresst.map((item, index) => {
      return (
        <Marker
        // key={index}
        // coordinate={item.location}
        // title={item.title}
        // description={item.des}
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={pickupCords}
        onRegionChange={onRegionChange}
      >
        <Marker
          draggable
          coordinate={draggableMakerCoord}
          onDragEnd={(e) => {
            setdraggableMakerCoord(e.nativeEvent.coordinate);
            console.log(e.nativeEvent.coordinate);
          }}
        />
      </MapView>
      <View style={styles.content}>
        <Text>latitude {draggableMakerCoord.latitude}</Text>
        <Text>longitude {draggableMakerCoord.longitude}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  content: {
    position: "absolute",
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    bottom: 0,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
