import {StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import { searchFilterAction } from '../../redux/action/action';
import {useDispatch, useSelector} from 'react-redux';
import { listFilterSelector } from '../../redux/selector';
import ShowSearchFilters from '../../component/ShowSearchFilters';
export default function SearchFilters() {
  const dispatch = useDispatch();
  const [searchFilter, setsearchFilter] = useState('');
  const listSearch = useSelector(listFilterSelector);
  return (
    <View style={{backgroundColor: '#FEF6E4', height: '100%'}}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
        <View
          style={{
            height: 40,
            backgroundColor: '#DBDBDB',
            opacity: 0.5,
            borderRadius: 17,
            marginTop: 17,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            flexGrow: 1,
            paddingLeft: 10,
          }}>
          <TextInput
            placeholder="Tìm kiếm"
            value={searchFilter}
            onChangeText={text => {
              setsearchFilter(text);
              dispatch(searchFilterAction(text));
            }}
            style={{flexGrow: 1}}></TextInput>
        </View>
      </SafeAreaView>
      <ShowSearchFilters data={listSearch} />
    </View>
  );
}

const styles = StyleSheet.create({});
