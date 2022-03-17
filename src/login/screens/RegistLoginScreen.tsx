import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { baseHeight, baseWidth, DisplayWdith } from "../../utills/Values";
import { LoginLogo } from "../logincomponents/LoginLogo";
import { SelectLanguage } from "../logincomponents/SelectLanguage";
import { EmailLoginButton, RecentLoginView, SnsLoginButtons } from "../logincomponents/SnsEmailLoginButtons";



const LoginContainer=styled.View`
    align-items: center;
    margin-top: 30px;

`;

const LoginVididiLine =()=>{
    return (
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:baseHeight*34}}>
            <View style={{width:(DisplayWdith-50)/2 - 10,height:baseHeight*1,backgroundColor:"#aaaaaa"}} />
            <Text style={{color:"#aaaaaa"}}> or </Text>
            <View style={{width:(DisplayWdith-50)/2 - 10,height:baseHeight*1,backgroundColor:"#aaaaaa"}} />
        </View>

    )
}

export const RegistLoginScrren =()=>{
     const navi :any = useNavigation();

    return (
        <ScrollView>
            <View style={{flex:1,backgroundColor:"white"}}>
                {/* 언어설정 컨테이너 */}
                <SelectLanguage />
                {/* 로고 */}
                <LoginLogo />
                {/* 이벤트 및 커스텀 (미정) */}
                <Image source={require("../../../images/fantoo_loding1.png")} 
                    style={{width:baseWidth*158,height:baseHeight*150,alignSelf:"center",marginTop:20}}/> 
                {/* Login */}
                <LoginContainer>
                   <RecentLoginView />
                    {/* 다른 로그인 */}
                    <View>
                        {/* line */}
                        <LoginVididiLine />
                        {/* sns login 버튼 */}
                        <SnsLoginButtons />
                        {/* 이메일로 계속하기 */}
                        <EmailLoginButton />
                    </View>
                </LoginContainer>
                {/* 비로그인 접속 */}
                <TouchableOpacity onPress={()=>{
                     navi.reset({routes:[{name:"Main"}]});
                     }}>
                    <Text style={{marginTop:71,marginBottom:30,textAlign:"center"}}>둘러보기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
       
    )
}