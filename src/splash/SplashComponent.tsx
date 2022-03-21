import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import styled from "styled-components/native";
import { getCheckFirstItem, getCheckLogin } from "../utills/Storage";


const SplashContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;



export const Splash = ()=>{
    const navi :any =useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            getCheckFirstItem().then((value)=>{
                if(value){
                    getCheckLogin().then((value)=>{
                        if(value){
                            navi.reset({routes:[{name : "Main"}]})
                        }else{
                            navi.reset({routes:[{name : "Login"}]})
                        }
                    })
                }else{
                    //첫 입장이 true 여야 자연스럽지만 초반 AsyncStorage에 데이터가 없어 
                    //null 이 날라옴 , 그로인해 첫 입장 확인은 false 일 때 첫입장인 것으로 정의
                    navi.reset({routes:[{name : "Permission"}]})
                }
    
            },(error)=>{
                navi.reset({routes:[{name : "Login"}]})
            });
        },2000);
    },[]);

    return (
      <SplashContainer >
        <Image source={require("../../images/permissionLogo.png")} style={{width:60,height:50}}/>
      </SplashContainer>
    )
  }