import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginRegistStack } from './src/login/LoginRegistStack';
import { MainBottomTab } from './src/main/MainBottomTabScreen';
import { PermissionScreen } from './src/splash/PermissionCheck';
import { Splash } from './src/splash/SplashComponent';
import { StoreProvider } from './src/store/Context';
import { RootStore } from './src/store/RootStore';
import * as SplashScreen from 'expo-splash-screen';

const Stack =createNativeStackNavigator();
const rootStore = new RootStore();

export default function App() {
  SplashScreen.hideAsync();

  return (
    <StoreProvider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name='Permission' component={PermissionScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Login' component={LoginRegistStack} options={{headerShown:false}}/>
          <Stack.Screen name='Main' component={MainBottomTab} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

