import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Slashscreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 32,
        }}>
        <Text>Multi</Text>
        <Text style={{color: '#D42323'}}>Food</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
