import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { PostDetailPage } from "./boardposts/PostDetailPage";
import { ProfileNavigation } from "./profiles/ProfileNavigation";
import { FantooMainScreen } from "./screens/FantooMainScreen";

const Stack =createNativeStackNavigator();

export const MainScreens = ()=>{
    const navi =useNavigation();
    
    return(
        <Stack.Navigator screenListeners={{focus : (evnet)=>{
            (evnet.target?.includes("PostDetail") ||
            evnet.target?.includes("InputProfile")? 
              navi.setOptions({tabBarStyle : {display :'none'}}) 
            : navi.setOptions({tabBarStyle : {display :'flex'}}))
        }}}>
            <Stack.Screen name="FantooMain" component={FantooMainScreen} 
                    options={{
                        title:"FANTOO",
                        headerRight:()=>{
                            return (
                                <View style={{flexDirection:"row"}}>
                                    <View style={{width:30,height:30, backgroundColor:"black",marginHorizontal:3}} />
                                    <View style={{width:30,height:30, backgroundColor:"black",marginHorizontal:3}}/>
                                </View>
                            )
                        }
                    }} />
            <Stack.Screen name="PostDetail" component={PostDetailPage}
                    options={{
                        title:"Detail",
                        headerTitleAlign:"center",
                    }}
            />
            <Stack.Screen name="InputProfile" component={ProfileNavigation}
                    options={{headerShown:false}}
            />

        </Stack.Navigator>
    )

}