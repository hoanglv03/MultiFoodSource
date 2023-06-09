import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../view/home/Home';
import SearchScreen from '../view/home/SearchScreen';
import OrderScreen from '../view/home/OrderScreen';
import AccountScreen from '../view/home/AccountScreen';
import Icon from 'react-native-ionicons'


const Tab = createBottomTabNavigator();

export default function BottomTabHome() {
    return (
        <Tab.Navigator
          screenOptions={({route})=>({
            
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              backgroundColor:'#ffffff',
              elevation: 12,
              
            }
            ,
             
              tabBarIcon:({focused,size,colour})=>{
                let iconName;
                if(route.name == "HomeScreen"){
                  iconName = focused ? "home" : "home"
                  colour = focused ? '#D42323' : '#AAAAAA'
                }else if(route.name == "SearchScreen"){
                  iconName = focused ? "search" : "search"
                  colour = focused ? '#D42323' : '#AAAAAA'
                }else if(route.name == "OrderScreen"){
                  iconName = focused ? "ios-document-text" : "ios-document-text-outline"
                  colour = focused ? '#D42323' : '#AAAAAA'
                }else if(route.name == "AccountScreen"){
                  iconName = focused ? "ios-person" : "ios-person-outline"
                  colour = focused ? '#D42323' : '#AAAAAA'
                }
    
               return <Icon  name='home' size={20} color={colour}/>
              },
              tabBarIconStyle: {
               marginTop:18
              }
          })}
        >
          <Tab.Screen  name="HomeScreen" component={Home} 
          />
          <Tab.Screen name="SearchScreen" component={SearchScreen} />
          <Tab.Screen name="OrderScreen" component={OrderScreen} />
          <Tab.Screen name="AccountScreen" component={AccountScreen} />
        </Tab.Navigator>
    )
}

