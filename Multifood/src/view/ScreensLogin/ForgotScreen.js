import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


export default function ForgotScreen({navigation}) {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        ,
      }}>
        <Pressable onPress={()=>{
          navigation.goBack();
        }}>
        <Image style={{
          
        }}  source={require('../../assets/images/ic_arrow.png')}/>
        </Pressable>
          <Text style={{
         marginRight:28,
         
         fontSize:16
        }}>Quên mật khẩu</Text>
        <View></View>
      </SafeAreaView>
      <Text style={{
        fontSize:30,
        
        marginTop:60
      }}>Cài đặt lại mật khẩu</Text>
      <Text  style={{
        fontSize:16,
        
        marginTop:20,
        paddingRight:50,
        color:'#868686'
      }}>Điền số điện thoại vào bên dưới và chúng tôi sẽ gửi mã cài đặt lại mật khẩu cho bạn</Text>
      <View
        style={{
          marginTop: 26,
        }}
      >
        <Text style={{ fontSize: 16 }}>
         Số điện thoại
        </Text>
        <TextInput
        placeholder='Nhập vào đây'
          style={{
            height: 52,
            backgroundColor: "#EBEBEB",
            marginTop: 8,
            borderRadius: 8,
            borderColor: "#DEDEDE",
            padding: 16,
            borderWidth: 1,
            
          }}
        ></TextInput>
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
          onPress={()=>{
            navigation.navigate("VerifyPhoneNumber")
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
    flex:1
    ,marginLeft:20,
    marginRight:20,
    marginTop:20
  }
})