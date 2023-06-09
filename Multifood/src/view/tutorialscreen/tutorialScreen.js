import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import PagerView from "react-native-pager-view";

export default function TutorialScreen({navigation}) {
    const ref = useRef();
    const [pageSelect,setPageSelect] = useState("");
    return (
      <View style={{ flex: 1 }}>
        <PagerView 
        ref={ref}
        style={styles.viewPager} initialPage={0}>
          <View style={styles.page} key="1">
            <Image source={require("../../assets/images/ImageTutorial1.png")} />
            <Text style={styles.title}>
              Thỏa mãn cơn thèm một cách{" "}
              <Text style={{ color: "#D42323" }}>dễ dàng</Text>{" "}
            </Text>
            <Text style={styles.content}>
              Hãy để MultiFood giúp đỡ bạn ngay bây giờ
            </Text>
            <View style={styles.buttonView}>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>Bỏ qua</Text>
              </Pressable>
              <Pressable
                  onPress={()=> ref.current?.setPage(1)}
                style={[
                  styles.button,
                  { backgroundColor: "#0D0D0D", borderRadius: 8 },
                ]}
              >
                <Text
                  style={[
                    styles.textButton,
                    {
                      color: "#FFFFFF",
                    },
                  ]}
                >
                  Tiếp theo
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.page,{marginTop:30}]} key="2">
            <Image source={require("../../assets/images/ImageTutorial2.png")} />
            <Text style={styles.title}>
              Tìm nhà hàng yêu thích mới của bạn chỉ bằng{" "}
              <Text style={{ color: "#D42323" }}>một cú chạm</Text>{" "}
            </Text>
            <Text style={styles.content}>
              Hãy để MultiFood giúp đỡ bạn ngay bây giờ
            </Text>
            <View style={styles.buttonView}>
              <Pressable  onPress={()=> ref.current?.setPage(0)} style={styles.button}>
                <Text style={styles.textButton}>Quay lại</Text>
              </Pressable>
              <Pressable
               onPress={()=> ref.current?.setPage(2)}
                style={[
                  styles.button,
                  { backgroundColor: "#0D0D0D", borderRadius: 8 },
                ]}
              >
                <Text
                  style={[
                    styles.textButton,
                    {
                      color: "#FFFFFF",
                    },
                  ]}
                >
                  Tiếp theo
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.page} key="3">
            <Image source={require("../../assets/images/ImageTutorial3.png")} />
            <Text style={styles.title}>
            Bữa ăn tươi ngon, giao tận nơi ngưỡng {" "}
              <Text style={{ color: "#D42323" }}>cửa của bạn</Text>{" "}
            </Text>
            <Text style={styles.content}>
              Hãy để MultiFood giúp đỡ bạn ngay bây giờ
            </Text>
            <View style={styles.buttonView}>
             
              <Pressable
              onPress={()=>{
                navigation.navigate('LoginScreen')
              }}
                style={[
                  styles.button,
                  { backgroundColor: "#0D0D0D", borderRadius: 8 },
                ]}
              >
                <Text
                  style={[
                    styles.textButton,
                    {
                      color: "#FFFFFF",
                    },
                  ]}
                >
                  Bắt đầu
                </Text>
              </Pressable>
            </View>
          </View>
        </PagerView>
      
      </View>
    );
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
      },
      page: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 70,
      },
      title: {
        
        fontSize: 24,
        textAlign: "center",
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50,
      },
      content: {
        marginTop: 10,
        
        color: "#9F9F9F",
      },
      buttonView: {
        flexDirection: "row",
        marginLeft: 45,
        marginRight: 45,
      },
      button: {
        width: "50%",
        height: 50,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
      },
      textButton: {
        
        fontSize: 14,
      },
})