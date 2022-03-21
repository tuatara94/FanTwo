import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { MainScreens } from "./MainScreens";
import { FantooMainScreen } from "./screens/FantooMainScreen";


const BottomTab =createBottomTabNavigator();

export const MainBottomTab =()=>{


    return (
        <BottomTab.Navigator backBehavior="none" screenOptions={{

        }}>
            <BottomTab.Screen name="Fantoo" component={MainScreens}
                options={{
                  headerShown:false,
                }}
            />
        </BottomTab.Navigator>
    )

}