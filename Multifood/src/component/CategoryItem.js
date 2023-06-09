import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";

export default function CategoryItem({ item }) {
    const [selectedId, setselectedId] = useState();
    const backgroundColor = item.id === selectedId ? "#D42323":"#F3DDDD"
  return (
    <View >
      <Pressable
      
        style={{
          height: 33,
          width: 123,
          backgroundColor: backgroundColor,
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
        onPress={()=>{
            setselectedId(item.id)
        }}
      >
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            color: "#868686",
          }}
        >
          {item.nameCategory}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
