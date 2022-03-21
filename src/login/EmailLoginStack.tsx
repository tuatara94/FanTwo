import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { EmailLoginMain } from "./screens/EmailLoginMainScreen";
import { RegisterPage } from "./screens/RegisterPage";


const Stack = createNativeStackNavigator();

export const EmailLoginScreen =()=>{

    return (
        <Stack.Navigator>
            <Stack.Screen name="loginMain" component={EmailLoginMain} options={{title:""}}/>
            <Stack.Screen name="register" component={RegisterPage} options={{title:""}}/>
        </Stack.Navigator>
    )
}