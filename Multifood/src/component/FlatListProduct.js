import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lists from '../data'
import SilderItem from './SilderItem'
import FlatListItem from './FlatListItem'
export default function FlatListProduct({data}) {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <FlatListItem item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})