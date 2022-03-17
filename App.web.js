import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Platform, Text, View } from 'react-native'
import { MainBottomTab } from './src/main/MainBottomTabScreen';

const Stack=createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={MainBottomTab} />
        </Stack.Navigator>
    </NavigationContainer>
    ) 
}

export default App