import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lists from '../data'
import SilderItem from './SilderItem'
import FlatListItem from './FlatListItem'
import { useDispatch,useSelector } from 'react-redux'
export default function FlatListProduct() {
  const listRestaurant = useSelector(state => state.restaurants)
  return (
    <View>
      <FlatList
        data={listRestaurant}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <FlatListItem item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})