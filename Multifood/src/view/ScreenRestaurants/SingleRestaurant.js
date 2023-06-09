import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FoodItem from "../../component/FoodItem";
import ListFood from "../../component/ListFood";
import CategoryFood from "../../component/CategoryFood";
import FoodPopulars from "../../component/Restaurant/FoodPopulars";
export default function SingleRestaurant({ route, navigation }) {
  var objRestaurant = route.params.item;
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 0.4 }}>
        <Image source={objRestaurant.img} style={styles.img} />
        <View style={styles.icArr}>
          <SafeAreaView>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                style={styles.imgArrow}
                source={require("../../assets/images/ic_arrow.png")}
              />
            </Pressable>
          </SafeAreaView>
        </View>
      </View>
      <View style={styles.titleHotel}>
        <Text style={styles.nameHotel}>{objRestaurant.nameHotel}</Text>
        <View style={styles.styleCategory}>
          {objRestaurant.foodCategory.map((name, _) => {
            return (
              <View style={styles.foodCategory}>
                <Text style={styles.textTitle}>{name}</Text>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    
                    backgroundColor:
                      _++ != objRestaurant.foodCategory.length - 1
                        ? "#909090"
                        : "",
                    marginLeft: 8,
                    marginRight: 8,
                  }}
                />
              </View>
            );
          })}
        </View>
        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <View
            style={{
                       backgroundColor: "#D42323",
              width: 52,
            }}
          >
            <Text
              style={{
                
                width: 46,
                height: 19,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#F6F6F6",
              }}
            >
              <Ionicons name="star" size={16} color={"#FFCB11"} />
              {" " + objRestaurant.rate}
            </Text>
          </View>
          <Text
            style={{
              marginLeft: 8,
              
              color: "#505050x",
            }}
          >
            127+ ratings
          </Text>
        </View>
        <View style={{ marginTop: 24 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#F3DDDD",
                
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>
                <Ionicons name="md-bicycle" size={16} color={"#D42323"} />
              </Text>
            </View>
            <View>
              <Text
                style={{
                  
                  marginLeft: 10,
                  color: "#212121",
                  width: 60,
                }}
              >
                {objRestaurant.fee}
              </Text>
            </View>
            <View
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#F3DDDD",
                
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <Text>
                <Ionicons name="md-time-sharp" size={16} color={"#D42323"} />
              </Text>
            </View>
            <View>
              <Text
                style={{
                  
                  marginLeft: 10,
                  color: "#212121",
                  width: 30,
                }}
              >
                {objRestaurant.timeShip}
              </Text>
            </View>
          </View>
          <Pressable
            style={{
              width: 125,
              height: 42,
                       borderWidth: 1.5,
              borderColor: "#D42323",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 32,
            }}
          >
            <Text
              style={{
                
                color: "#D42323",
              }}
            >
              MUA NGAY
            </Text>
          </Pressable>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 32,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                
                color: "#010F07",
                fontSize: 20,
              }}
            >
              Món ăn nổi bật
            </Text>
            <Text
              style={{
                
                color: "#D42323",
                fontSize: 16,
              }}
            >
              Xem tất cả
            </Text>
          </View>
        </View>
        <ListFood navigation={navigation} />
      </View>
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <CategoryFood />
        <Text
          style={{
            
            fontSize: 20,
            marginTop: 16,
            marginBottom: 20,
          }}
        >
          Phổ biến nhất
        </Text>
        <FoodPopulars />
        <Text
          style={{
            
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          Món ăn ngon
        </Text>

        <FoodPopulars />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 0.3,
    width: "100%",
    height: 251,
  },
  icArr: {
    position: "absolute",
    marginLeft: 20,
  },
  imgArrow: {
    tintColor: "#fff",
    marginTop: 12,
    backgroundColor: "",
  },
  titleHotel: {
    marginTop: 18,
    marginLeft: 20,
    marginRight: 20,
  },
  nameHotel: {
    
    fontSize: 24,
  },
  dot: {
    width: 6,
    height: 6,
    
    backgroundColor: "#909090",
    marginLeft: 8,
    marginRight: 8,
  },
  foodCategory: {
    flexDirection: "row",

    alignItems: "center",
  },
  styleCategory: {
    flexDirection: "row",
    marginTop: 8,
  },
  textTitle: {
    
    color: "#868686",
  },
});
