import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { EmailLoginScreen } from "./EmailLoginStack";
import { RegistLoginScrren } from "./screens/RegistLoginScreen";


const Stack = createNativeStackNavigator();
export const LoginRegistStack = ()=>{

    return (
        <Stack.Navigator>
            {/* 첫 로그인 화면  */}
            <Stack.Screen name="initScreen" component={RegistLoginScrren} options={{headerShown:false}}/>
            {/* 이메일로 계속하기 화면 */}
            <Stack.Screen name="EmailLogin" component={EmailLoginScreen} options={{headerShown:false}} />
        </Stack.Navigator>

    )

}