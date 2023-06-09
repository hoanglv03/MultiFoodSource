import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';

export default function ResetPassword({navigation}) {
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
            navigation.navigate("LoginScreen");
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
          Thiết lập lại mật khẩu
        </Text>
        <View></View>
      </SafeAreaView>
      <Text
        style={{
          fontSize: 30,
        
          marginTop: 60,
          paddingRight:80
        }}
      >
        Thiết lập lại mật khẩu của bạn
      </Text>
      <View
        style={{
          marginTop: 26,
        }}
      >
        <Text style={{ fontFamily: "Product-Sans-Bold", fontSize: 16 }}>
         Mật khẩu mới
        </Text>
        <TextInput
        placeholder='Nhập vào đây...'
        secureTextEntry={true}
          style={{
            height: 52,
            backgroundColor: "#EBEBEB",
            marginTop: 8,
            borderRadius: 8,
            borderColor: "#DEDEDE",
            padding: 16,
            borderWidth: 1,
            
          }}
        >
        
        </TextInput>
        
      </View>
      <View
        style={{
          marginTop: 12,
        }}
      >
        <Text style={{   fontSize: 16 }}>
         Nhập lại mật khẩu mới
        </Text>
        <TextInput
        placeholder='Nhập vào đây...'
        secureTextEntry={true}
          style={{
            height: 52,
            backgroundColor: "#EBEBEB",
            marginTop: 8,
            borderRadius: 8,
            borderColor: "#DEDEDE",
            padding: 16,
            borderWidth: 1,
            
          }}
        >
        
        </TextInput>
        
      </View>
      <Pressable
          style={{
            height: 46,
            backgroundColor: "#D42323",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={()=>{
            navigation.navigate("LoginScreen")
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
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        marginRight:20
    }
})