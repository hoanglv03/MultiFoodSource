import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");
import Icon from "react-native-vector-icons/Ionicons";


export default function HotelItem({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="center" style={styles.img} />
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 18,
          }}
        >
          {item.nameHotel}
        </Text>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 15,
            color: "#505050",
            marginTop: 6,
          }}
        >
          {item.foodCategory[0]}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.contentFont}>
            {item.rate} <Icon name="star" size={16} color={"#FFCB11"} />
          </Text>
          <View style={styles.dot} />
          <Text style={styles.contentFont}>
            <Icon name="md-time-sharp" size={16} color={"#505050"} />
            {item.timeShip}
          </Text>
          <View style={styles.dot} />

          <Text style={styles.contentFont}>
            <Icon name="md-bicycle" size={16} color={"#505050"} />{" "}
            {item.fee}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: 269,
    marginBottom: 20,
  },
  img: {
    flex: 0.7,
    width: "90%",
    alignItems: "center",
    borderRadius: 8,
  },
  content: {
    flex: 0.3,
    marginTop: 14,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#909090",
    marginLeft: 6,
    marginRight: 6,
  },
  contentFont: {
    fontFamily: "Product-Sans-Bold",
  },
});
