import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function ItemFoodPopular({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.img} />
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 16,
            color: "#000000",
          }}
        >
          {item.nameFood}
        </Text>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 16,
            color: "#868686",
            marginTop: 4,
          }}
        >
          {item.des}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              fontSize: 16,
              color: "#868686",
              marginTop: 4,
            }}
          >
            {item.origin}
          </Text>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              fontSize: 16,
              color: "#D42323",
              marginTop: 4,
              marginRight:7
            }}
          >
           Giá: {item.price}
          </Text>
        </View>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 119,
    marginRight: 14,
    flexDirection: "row",
    marginBottom: 32,
  },
  img: {
    flex: 0.32,
    height: "100%",
    borderRadius: 8,
    alignItems: "center",
  },
  content: {
    flex: 0.65,
    marginTop: 14,
    marginLeft: 16,
  },
});
