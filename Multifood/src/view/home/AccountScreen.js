import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>SettingScreens</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'aqua'
  },
})