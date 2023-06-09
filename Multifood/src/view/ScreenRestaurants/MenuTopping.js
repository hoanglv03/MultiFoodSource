import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";
export default function MenuTopping({ route, navigation }) {
  const { width, height } = Dimensions.get("screen");
  var objTopping = route.params.item;
  return (
    <View>
      <Image
        source={objTopping.img}
        resizeMode="center"
        style={{
          width: width,
          height: 251,
        }}
      />
      <SafeAreaView style={{ position: "absolute" }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View
            style={{
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: 40,
              height: 40,
              opacity: 0.6,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20,
            }}
          >
            <Image
              style={styles.imgArrow}
              source={require("../../assets/images/ic_arrow.png")}
            />
          </View>
        </Pressable>
      </SafeAreaView>
      <View style={{ marginLeft: 20, marginTop: 24, marginRight: 20 }}>
        <Text
          style={{
            
            fontSize: 24,
          }}
        >
          {objTopping.nameFood}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#868686",
            marginTop: 8,
          }}
        >
          {objTopping.des}
        </Text>
        <View
          style={{
            width: 135,
            height: 32,
            backgroundColor: "#F3DDDD",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Text
            style={{
              color: "#D42323",
              fontSize: 16,
            }}
          >
            {objTopping.origin}
          </Text>
        </View>
        <View style={styles.viewBox}>
          <Text
            style={{
              
              fontSize: 18,
              color: "#010F07",
          
            }}
          >
            Lựa chọn Topping
          </Text>
          <View
            style={{
              backgroundColor: "#F8E2CD",
              justifyContent:'center'
              ,alignItems:'center'
              ,height:32,
              width:96,
             
            }}
          >
            <Text style={{
               
              fontSize: 16,
              color: "#EB770C",
          
            }}>Bắt buộc</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  viewBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
