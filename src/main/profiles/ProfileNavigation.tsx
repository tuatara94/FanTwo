import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TextInput } from "react-native";
import { InputBirthDay } from "./screens/InputBirthDay";
import { InputNickName } from "./screens/InputNickName";
import { InterestTopic } from "./screens/InterestTopic";
import { IntroduceMySelf } from "./screens/IntroduceMySelf";
import { PhoneAuth } from "./screens/PhoneAuth";
import { ProfileImage } from "./screens/ProfileImage";
import { SelectGender } from "./screens/SelectGender";

const Stack =createNativeStackNavigator();

export const ProfileNavigation =()=>{

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="NickName" component={InputNickName} />
            <Stack.Screen name="BirthDay" component={InputBirthDay} />
            <Stack.Screen name="Gender" component={SelectGender} />
            <Stack.Screen name="Interest" component={InterestTopic} />
            <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
            <Stack.Screen name="ProfileImage" component={ProfileImage} />
            <Stack.Screen name="IntroduceSelf" component={IntroduceMySelf}/>
        </Stack.Navigator>
    )

}