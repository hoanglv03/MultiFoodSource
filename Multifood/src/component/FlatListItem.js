import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get("screen");
export default function FlatListItem({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="center" style={styles.img} />
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize:18,
            marginTop:16
          }}
        >
          {item.nameRestaurants}
        </Text>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            color:'#868686'
            ,marginTop:8
          }}
        >
          {item.addRess}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop:8
          }}
        >
          <View
            style={{
              borderRadius: 3,
              backgroundColor: "#D42323",
            }}
          >
            <Text
              style={{
                fontFamily: "Product-Sans-Bold",

                width: 46,
                textAlign: "center",
                color: "#F6F6F6",
              }}
            >
              <Icon name="star" size={16} color={"#FFCB11"} />
              { " "+item.rate}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
            }}
          >
            <View><View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#505050",
                marginLeft:3
              }}
            ></View></View>
            <Text style={{marginLeft:3}}>{" "+item.timeShip+" "}</Text>
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#505050",
                
              }}
            ></View>
           {" "+item.ship}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:300,
    height: 280,
  },
  img: {
    flex: 0.7,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
  },
  
});
