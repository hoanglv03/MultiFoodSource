import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function Location({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={{}} source={require("../../assets/images/ic_arrow.png")} />
        </Pressable>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 30,
            marginTop: 20,
            paddingRight: 120,
          }}
        >
          Tìm kiếm nhà hàng{" "}
          <Text
            style={{
              color: "#D42323",
            }}
          >
            gần bạn
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 16,
            marginTop: 20,
            color: "#9F9F9F",
            paddingRight: 70,
          }}
        >
          Chỉ cần nhập vị trí của bạn và khám phá danh sách các nhà hàng được
          xếp hạng hàng đầu trong khu vực.
        </Text>
      </SafeAreaView>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 52,
            borderRadius: 8,
            borderColor: "#D42323",
            borderWidth: 2,
          }}
        >
          <Ionicons name="md-locate-sharp" size={24} color={"#D42323"} />
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              color: "#D42323",
              marginLeft: 8,
            }}
          >
            SỬ DỤNG VỊ TRÍ HIỆN TẠI
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Maps");
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 52,
            borderRadius: 8,
            borderColor: "#9F9F9F",
            borderWidth: 2,
            marginTop: 14,
          }}
        >
          <Ionicons name="md-location-outline" size={24} color={"#9F9F9F"} />
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              color: "#9F9F9F",
              marginLeft: 8,
            }}
          >
            THÊM ĐỊA CHỈ MỚI
          </Text>
        </Pressable>
        {/* <GooglePlacesAutocomplete
        styles={{
          alignItems: "center",
            justifyContent: "center",
            height: 52,
            borderRadius: 8,
            borderColor: "#9F9F9F",
            borderWidth: 2,
            marginTop: 14,
        }}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
