import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import ItemRestaurant from '../../component/ItemRestaurant';
import {SafeAreaView} from 'react-native';
import {Pressable} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch,useSelector } from 'react-redux'

export default function Restaurants({navigation}) {
  const listRestaurant = useSelector(state => state.restaurants)
  return (
    <View styles={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 12,
          }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{}}
              source={require('../../assets/images/ic_arrow.png')}
            />
          </Pressable>
          <Text style={{}}>
            {' '}
            <Icon name="ios-options-outline" size={24} />
          </Text>
        </View>

        <FlatList
          data={listRestaurant}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ItemRestaurant item={item} navigation={navigation} />
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
