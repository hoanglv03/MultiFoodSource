import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text
          style={{
           
            fontSize: 30,
          }}
        >
          Hãy{" "}
          <Text
            style={{
              color: "#D42323",
            }}
          >
            Đăng nhập
          </Text>
          ,
        </Text>
        <Text
          style={{
           
            fontSize: 30,
          }}
        >
          việc nấu ăn cứ để chúng tôi
        </Text>
      </SafeAreaView>
      <View
        style={{
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: 16,
           
            color: "#9F9F9F",
          }}
        >
          Nếu bạn chưa có tài khoản
        </Text>
        <Text
          style={{
            fontSize: 16,
           
            color: "#9F9F9F",
          }}
        >
          hãy đăng ký{" "}
          <Text
            style={{
              color: "#D42323",
            }}
            onPress={()=>{navigation.navigate("SignUpScreen")}}
          >
            Tại đây
          </Text>
        </Text>
      </View>
      <View
        style={{
          marginTop: 32,
        }}
      >
        <Text style={{ fontSize: 16 }}>
          Tên người dùng
        </Text>
        <TextInput
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
      <View
        style={{
          marginTop: 16,
        }}
      >
        <Text style={{ fontSize: 16 }}>
          Mật khẩu
        </Text>
        <TextInput
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
        ></TextInput>
        <Text
          style={{
           
            fontSize: 16,
            textAlign: "right",
            marginTop: 16,
          }}
          onPress={()=>{
            navigation.navigate("ForgotScreen")
          }}
        >
          Quên mật khẩu ?
        </Text>
        <Pressable
        onPress={()=>{
          navigation.navigate('BottomTabHome')
        }}
          style={{
            height: 46,
            backgroundColor: "#D42323",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text
            style={{
             
              fontSize: 14,
              color: "#FFFFFF",
            }}
          >
            ĐĂNG NHẬP
          </Text>
         
        </Pressable>
        <Text  style={{
             
              fontSize: 14,
              color: "#0D0D0D",
              textAlign:'center'
              ,marginTop:26
            }}>
            Hoặc
          </Text>
          <Pressable style={{
            height:52,
            flexDirection:'row',
            justifyContent:'center',
            borderColor:'#9F9F9F',
            borderWidth:2,
            alignItems:'center',
            borderRadius:8,
            marginTop:25
            
          }} >
            <Image source={require("../../assets/images/ic_facebook.png")}></Image>
            <Text style={{
             
              marginLeft:10,
              fontSize:14
            }}>Kết nối với facebook</Text>
          </Pressable>
          <Pressable style={{
            height:52,
            flexDirection:'row',
            justifyContent:'center',
            borderColor:'#9F9F9F',
            borderWidth:2,
            alignItems:'center',
            borderRadius:8,
            marginTop:25
            
          }} >
            <Image style={{
              marginTop:4
            }} source={require("../../assets/images/ic_google.png")}></Image>
            <Text style={{
             
              marginLeft:10,
              fontSize:14
            }}>Kết nối với Google</Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 100,
   
  },
});
