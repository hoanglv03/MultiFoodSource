import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import listFood from "../data/food";
import FoodItem from "./FoodItem";
export default function ListFood({navigation}) {
  return (
    <View>
      <FlatList
        data={listFood}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <FoodItem item={item} navigation={navigation} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
