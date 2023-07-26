import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import listFood from "../data/food";
import FoodItem from "./FoodItem";
export default function ListFood({data}) {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <FoodItem item={item}  />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
