import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Icon from 'react-native-vector-icons/Ionicons'
import Slider from "../../component/Slider";
import FlatListProduct from "../../component/FlatListProduct";
import ListFood from "../../component/ListFood";
import ListHotel from "../../component/ListHotel";
import Restaurants from "../ScreenRestaurants/Restaurants";
import PagerView from 'react-native-pager-view';
export default function Home({navigation}) {
  const [showRestaurants, setShowRestaurants] = useState(false)
  return (
    <ScrollView  showsVerticalScrollIndicator={false}  style={styles.container}>
     <View style={{
      marginLeft:26,
      marginRight:26,
    
     }}>
     <SafeAreaView style={{
      flexDirection:'row',
      justifyContent:'space-between'
     }}>
      <View>
      
      <Text style={{
        fontFamily:'Product-Sans-Bold',
        marginTop:26,
        color:'#D42323',
      }}>Giao hàng đến</Text>
      <Text onPress={()=>{
        navigation.navigate("Location")
      }} style={{
        fontFamily:'Product-Sans-Bold',
        marginTop:8,
        color:'#000000',
      }}>Đống Đa
      <Icon name="chevron-down" size={16} />
     </Text>
     
     </View>
     <Icon name="options-outline" size={24} style={{ marginTop:26}} />
     </SafeAreaView>

     
      <Text style={{
         fontFamily:'Product-Sans-Bold',
        marginTop:16,
        color:'#000000',
        fontSize:20
      }}>Bán chạy nhất</Text>
  
     </View>
     <View style={{
      marginTop:20,
      
     }}>
     {/* slide show */}
     <Slider/>
     </View>
     <View style={{
      marginLeft:20,
      marginRight:20
      ,marginTop:30
     }}>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:16,

     }}>
     <Text style={{
         fontFamily:'Product-Sans-Bold',
       
        color:'#000000',
        fontSize:20,
        marginBottom:10
      }}>Nhà hàng nổi bật</Text>
      <Text onPress={()=>{
        navigation.navigate("Restaurants")
      }} style={{
        color:'#D42323',
        fontFamily:'Product-Sans-Bold',
        fontSize:16,
        marginTop:3
      }}>Xem tất cả</Text>
     </View>
     <FlatListProduct/>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
    

     }}>
     <Text style={{
         fontFamily:'Product-Sans-Bold',
       
        color:'#000000',
        fontSize:20,
        marginBottom:10
      }}>Đồ ăn</Text>
      <Text style={{
        color:'#D42323',
        fontFamily:'Product-Sans-Bold',
        fontSize:16,
        marginTop:3
      }}>Xem tất cả</Text>
     </View>
     <ListFood/>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:24

     }}>
     <Text style={{
         fontFamily:'Product-Sans-Bold',
       
        color:'#000000',
        fontSize:20,
        marginBottom:10
      }}>Nhà hàng nổi bẩn</Text>
      <Text style={{
        color:'#D42323',
        fontFamily:'Product-Sans-Bold',
        fontSize:16,
        marginTop:3
      }}>Xem tất cả</Text>
     </View>
        <ListHotel/>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'

  },
});
