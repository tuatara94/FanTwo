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