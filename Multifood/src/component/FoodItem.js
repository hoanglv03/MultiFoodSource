import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodItem({ item ,navigation}) {
  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.img} />
      <View style={styles.content}>
        <Text onPress={()=>{
          navigation.navigate("MenuTopping",{item:item})
        }} style={{
            fontFamily: "Product-Sans-Bold",
            fontSize:16,
            color:'#505050'
        }}>{item.nameFood}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    width: 120,
    height: 150,
    marginRight: 14,
    
  },
  img: {
    flex: 0.8,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
  },
  content:{
    flex:0.2
  }
});
