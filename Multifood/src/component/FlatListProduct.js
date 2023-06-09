import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lists from '../data'
import SilderItem from './SilderItem'
import FlatListItem from './FlatListItem'
export default function FlatListProduct() {
  return (
    <View>
      <FlatList
        data={Lists}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <FlatListItem item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})