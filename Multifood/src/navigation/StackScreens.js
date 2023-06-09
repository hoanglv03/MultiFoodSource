import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../view/ScreensLogin/LoginScreen';
import SignUpScreen from '../view/ScreensLogin/SignUpScreen';
import ForgotScreen from '../view/ScreensLogin/ForgotScreen';
import VerifyPhoneNumber from '../view/ScreensLogin/VerifyPhoneNumber';
import ResetPassword from '../view/ScreensLogin/ResetPassword';
import Restaurants from '../view/ScreenRestaurants/Restaurants';
import Location from '../view/Maps/Location';
import Maps from '../view/Maps/Maps';
import SingleRestaurant from '../view/ScreenRestaurants/SingleRestaurant';
import MenuTopping from '../view/ScreenRestaurants/MenuTopping';
import TutorialScreen from '../view/tutorialscreen/tutorialScreen';
import BottomTabHome from './BottomTabHome';
const Stack = createStackNavigator();

export default function StackScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({headerShown: false})}
        initialRouteName="TutorialScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
        <Stack.Screen name="BottomTabHome" component={BottomTabHome} />
        <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
        <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumber} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="SingleRestaurant" component={SingleRestaurant} />
        <Stack.Screen name="MenuTopping" component={MenuTopping} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
