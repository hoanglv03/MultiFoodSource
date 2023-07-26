import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux';
import {getRestaurant} from '../redux/action/action'
export default function ItemRestaurant({ item, navigation }) {
  const dispath = useDispatch()

  return (
    <Pressable
      onPress={() => {
        // dispath(getRestaurant(item.id))
        console.log('Item: ' , item.id)
        navigation.navigate("SingleRestaurant", { item: item });
      }}
      style={styles.container}
    >
      <View style={{ flex: 0.7, alignItems: "center" }}>
        <Image source={item.img} style={styles.img} />
        <View style={styles.boxContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Text style={styles.contentFont}>
              <Icon name="md-time-sharp" size={16} color={"#EBEBEB"} />
              {item.timeShip}
            </Text>
            <Text
              style={{
                fontFamily: "Product-Sans-Bold",
                backgroundColor: "#D42323",
                borderRadius:6,
                width: 46,
                textAlign: "center",
                color: "#F6F6F6",
              }}
            >
              <Icon name="star" size={16} color={"#FFCB11"} />
              {" " + item.rate}
            </Text>
          </View>
          <Text style={styles.contentFont}>
            <Icon name="md-bicycle" size={16} color={"#EBEBEB"} />{" "}
            {item.ship}
          </Text>
        </View>
      </View>
      <View style={styles.titleContent}>
        <Text style={[styles.contentFont, styles.titleColor]}>
          {item.nameRestaurants}
        </Text>
        <Text style={[styles.contentFont, { color: "#868686", marginTop: 2 ,fontSize:12}]}>
          {item.foodCategory.join(', ')}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    height: 269,
    
    marginRight: 14,
    marginLeft: 14,
  },
  img: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
  boxContent: {
    flex: 0.3,
    width: "90%",
    backgroundColor: "#4F4F4F",
    opacity: 0.8,
    position: "absolute",
    bottom: 10,
    borderRadius: 8,
    padding: 10,
  },
  contentFont: {
    fontFamily: "Product-Sans-Bold",
    color: "#EBEBEB",
  },
  titleContent: {
    flex: 0.3,
    position: "relative",
    top: 10,
  },
  titleColor: {
    color: "#000000",
    fontSize: 16,
  },
});
