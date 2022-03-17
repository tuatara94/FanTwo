/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Splash } from './src/splash/SplashComponent';
import { PermissionScreen } from './src/splash/PermissionCheck';
import { MainBottomTab } from './src/main/MainBottomTabScreen';
import { LoginRegistStack } from './src/login/LoginRegistStack';
import { StoreProvider } from './src/store/Context';
import { RootStore } from './src/store/RootStore';
 
const Stack =createNativeStackNavigator();
const rootStore = new RootStore();

const App = () => {
  
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
 };
 
 
 export default App;
 