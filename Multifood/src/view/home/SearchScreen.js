import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'black'
  },
})