import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { baseHeight, baseWidth, DisplayWdith } from "../../utills/Values";

const RecentLoginAccountText=styled.Text`
    font-size  : 13px;
    color: #797979;
`;

export const RecentLoginView =()=>{
    const navi:any =useNavigation();

    const loginSucess=()=>{
        navi.reset({routes:[{name:"Main"}]});
    }   

    return (
        <>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image source={require("../../../images/icons_alarm.png")} 
                        style={{width:baseWidth*10,height:baseHeight*15}}
                        resizeMode="contain"
                        />
                <RecentLoginAccountText> 최근 로그인 계정 : </RecentLoginAccountText>
                <RecentLoginAccountText> google</RecentLoginAccountText>
            </View>
            <TouchableOpacity onPress={loginSucess}>
            <View style={{flexDirection:"row",borderWidth:1,borderColor:"#797979",borderRadius:2,width:DisplayWdith-50,height:baseHeight*40,alignItems:"center",paddingHorizontal:baseHeight*20,paddingVertical:baseHeight*10,marginTop:baseHeight*17}}>
                <Image source={require("../../../images/login_btn_google.png")} 
                            style={{width:baseWidth*24,height:baseHeight*24}}
                            resizeMode="contain"
                            />
                <Text style={{alignSelf:"center",flex:1,textAlign:"center"}}>Google로 계속하기</Text>
            </View>
            </TouchableOpacity>
        </>
       
    )

}

export const SnsLoginButtons =()=>{

    const iconMap=[
        {
            name: "apple",
            iconUri:require("../../../images/login_btn_apple.png")
        },
        {
            name: "facebook",
            iconUri:require("../../../images/login_btn_facebook.png")
        },
        {
            name: "google",
            iconUri:require("../../../images/login_btn_google.png")
        },
        {
            name: "kakao",
            iconUri:require("../../../images/login_btn_kakao.png")
        },
        {
            name: "line",
            iconUri:require("../../../images/login_btn_line.png")
        },
        {
            name: "twitter",
            iconUri:require("../../../images/login_btn_twitter.png")
        },
    ];


    return (
        <View style={{flexDirection:"row",marginHorizontal:baseWidth*64,marginTop:baseHeight*32}}>
            {iconMap.map((item,index)=>{
                if(item.name==="google") return null;
                return(
                    <View key={index.toString()}>
                        <TouchableOpacity>
                        <Image source={item.iconUri}
                                style={{width:baseWidth*36,height:baseWidth*36,margin:baseWidth*8,borderRadius:8}} />
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

export const EmailLoginButton =()=>{
    const navi :any=useNavigation();
    const onEmailLoginPress =(()=>{
        navi.navigate("EmailLogin")
    })
    return (
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:baseHeight*24}}>
            <TouchableOpacity onPress={onEmailLoginPress} style={{height:baseHeight*27,backgroundColor:"#f2f2f2",borderRadius:baseHeight*14}}>
            <Text style={{color:"#333333",fontSize:12,textAlign:"center",marginVertical:5,marginHorizontal:20}}>이메일로 계속하기</Text>
            </TouchableOpacity>
        </View>
    )
}