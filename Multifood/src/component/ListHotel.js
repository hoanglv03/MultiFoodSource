import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import hotels from '../data/hotels'
import HotelItem from './HotelItem'
export default function ListHotel() {
  return (
    <View >
      <FlatList data={hotels}
          renderItem={({ item }) => <HotelItem item={item} />}


      />
    </View>
  )
}

const styles = StyleSheet.create({})