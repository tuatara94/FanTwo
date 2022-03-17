import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Image, Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styled from "styled-components/native";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { baseHeight, DisplayWdith } from "../../utills/Values";
import { AgreePolicyView } from "../registcomponents/AgreePolicyView";
import { InputCodeView } from "../registcomponents/InputCodeVIew";
import { RegisterPwView } from "../registcomponents/RegisterPwView";
import { SendCodeToEmailView } from "../registcomponents/SendCodeToEmailView";

export const TopText = styled.Text`
    margin-top  : 40px;
    margin-left: 27px;
    font-size: 18px;
    color: #333333;
    align-self: flex-start;
`;
export const InputIDPASS=styled.TextInput`
    width: ${DisplayWdith-50}px;
    height: ${baseHeight*40}px;
    margin-top: 18px;
    background-color: #f2f2f2;
    border-radius: 8px;
    border-width: 1px;
    border-color: #797979;
    text-align: center;
`;

export const Tooltip=styled.Text`
      color: #7f7f7f;
      font-size: 11px;
      align-self: flex-start;
      margin-top: 5px;
      margin-left: 25px;

`;
export const WaringText=styled.Text`
    align-self  : flex-start;
    margin-left: 25px;
    color:  red;
    font-size: 12px;
`;

export const OkText=styled.Text`
    color:#1e98d7;
    font-size : 13px;
    height: ${baseHeight*40}px ;
    margin-top: 18px;
    margin-left: 10px;
    padding-top: 10px;
    text-align: center;
    position: absolute;
`;


export const RegisterPage =observer(()=>{
    const [registerStep,setRegisterStep]=useState("step1");
    

    return ( 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {
                //  메일에 코드전송 뷰 
            registerStep=="step1"? <SendCodeToEmailView settingStep={setRegisterStep}/> :
                //  코드 입력 뷰 
             registerStep=="step2"? <InputCodeView settingStep={setRegisterStep}/> :
                //  비밀번호 등록 뷰  
             registerStep=="step3"? <RegisterPwView settingStep={setRegisterStep}/> :
                // 정책 동의 뷰 
             registerStep=="step4"? <AgreePolicyView settingStep={setRegisterStep}/> :
             null
            }
        </TouchableWithoutFeedback>
    )

})