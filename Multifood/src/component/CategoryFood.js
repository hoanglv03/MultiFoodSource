import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import data from "../data/category";
import CategoryItem from "./CategoryItem";
import { TouchableOpacity } from "react-native-gesture-handler";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>
      {item.nameCategory}
    </Text>
  </TouchableOpacity>
);
export default function CategoryFood() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#D42323" : "#F3DDDD";
    const color = item.id === selectedId ? "#FBFBFB" : "#868686";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 33,
    width: 123,
    backgroundColor: "#F3DDDD",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  title: {
    fontFamily: "Product-Sans-Bold",
    color: "#868686",
  },
});
