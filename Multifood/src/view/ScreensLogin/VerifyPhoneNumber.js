import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef } from "react";

export default function VerifyPhoneNumber({ navigation }) {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
            marginRight: 28,
           
            fontSize: 16,
          }}
        >
          Quên mật khẩu
        </Text>
        <View></View>
      </SafeAreaView>
      <Text
        style={{
          fontSize: 30,
         
          marginTop: 60,
        }}
      >
        Xác thực số điện thoại
      </Text>
      <Text
        style={{
          fontSize: 16,
         
          marginTop: 20,
          paddingRight: 70,
          color: "#868686",
        }}
      >
        Chúng tôi đã gửi mã xác thực vào số +84 862****882
      </Text>
      <Text
        style={{
          fontSize: 16,
         
          color: "#868686",
          marginTop: 16,
        }}
      >
        Không nhận được mã ?{" "}
        <Text
          style={{
            color: "#D42323",
          }}
        >
          Nhận lại mã
        </Text>
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <TextInput
          style={styles.textInputNumber}
          ref={et1}
          maxLength={1}
          onChangeText={(txt) => {
            if (txt.length >= 1) et2.current.focus();
          }}
          inputMode="numeric"
        />
        <TextInput
          style={styles.textInputNumber}
          ref={et2}
          maxLength={1}
          onChangeText={(txt) => {
            txt.length >= 1 ? et3.current.focus() : et1.current.focus();
          }}
          inputMode="numeric"
        />
        <TextInput
          style={styles.textInputNumber}
          ref={et3}
          maxLength={1}
          onChangeText={(txt) => {
            txt.length >= 1 ? et4.current.focus() : et2.current.focus();
          }}
          inputMode="numeric"
        />
        <TextInput
          style={styles.textInputNumber}
          ref={et4}
          maxLength={1}
          onChangeText={(txt) => {
            txt.length >= 1 ? et5.current.focus() : et3.current.focus();
          }}
          inputMode="numeric"
        />
        <TextInput
          style={styles.textInputNumber}
          ref={et5}
          maxLength={1}
          onChangeText={(txt) => {
            txt.length >= 1 ? et6.current.focus() : et4.current.focus();
          }}
          inputMode="numeric"
        />
        <TextInput
          style={styles.textInputNumber}
          ref={et6}
          maxLength={1}
          onChangeText={(txt) => {
            txt.length >= 1 ? Keyboard.dismiss() : et5.current.focus();
            
          }}
          inputMode="numeric"
        />
      </View>
      <Pressable
        style={{
          height: 46,
          backgroundColor: "#D42323",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
        onPress={() => {
          navigation.navigate("ResetPassword");
        }}
      >
        <Text
          style={{
           
            fontSize: 14,
            color: "#FFFFFF",
          }}
        >
          XÁC NHẬN
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  textInputNumber: {
    width: 40,
    height: 40,
    margin: 10,
    borderBottomWidth: 2,
    borderColor: "#868686",
    fontSize: 24,
    paddingLeft: 13,
  },
});
