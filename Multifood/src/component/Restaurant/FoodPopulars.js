import { StyleSheet, Text, View } from "react-native";
import React from "react";
import foodPopulars from "../../data/foodpopular";
import { FlatList } from "react-native";
import ItemFoodPopular from "./ItemFoodPopular";

export default function FoodPopulars() {
  return (
    <FlatList
      data={foodPopulars}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ItemFoodPopular item={item} />}
    />
  );
}

const styles = StyleSheet.create({});
