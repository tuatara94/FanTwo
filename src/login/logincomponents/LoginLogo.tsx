import React, { useEffect, useState } from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { baseHeight, baseWidth } from "../../utills/Values";


const MainLogoContainer=styled.View`
    flex-direction  : row;
    justify-content: center;
    align-items: center;
    margin-top: 86px;
`;
export const LoginLogo =()=>{
   
    return (
        <MainLogoContainer>
            <Image source={require("../../../images/permissionLogo.png")} 
                    style={{width:baseWidth*47,height:baseHeight*30,marginRight:baseWidth*8}}/>
            <Text style={{fontSize:34,color:"#333333",fontWeight:"bold"}} >FANTOO</Text>
        </MainLogoContainer>
    )
}