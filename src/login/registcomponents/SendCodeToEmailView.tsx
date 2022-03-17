import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { useStore } from "../../store/Context";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { DisplayWdith, baseHeight } from "../../utills/Values";
import { TopText, InputIDPASS, WaringText, Tooltip } from "../screens/RegisterPage";

export const SendCodeToEmailView =({settingStep}:{settingStep:Function})=>{

    const navi = useNavigation();
    const [btnEnable,setBtnEnable]=useState(true);
    const [emailText,setEmailText]=useState("");
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const [emailCheck,setEmailCheck]=useState(false);
    const {sendEmailInfo}=useStore();
    
    useEffect(()=>{

        if(emailText !== "" && emailRegExp.test(emailText)){
            setEmailCheck(false)
            setBtnEnable(false)
        }else if(emailText === ""){
            setEmailCheck(false)
            setBtnEnable(true)
        }else{
            setEmailCheck(true)
            setBtnEnable(true)
        }

    },[emailText])

    const sendCode = ()=>{
        // TODO : 코드 보낸 후 결과 받고 step2 로 이동 
        /**
        fetch("api/request/send/emailCode",{
            method:"Get"
        }).then(result => result.json())
        .then(response => {
            if(response.result =="200"){
                settingStep("step2")
            }else{
                Alert.alert("","이메일 전송중 에러 발생",[{
                    text:"OK",
                    onPress:()=>{
                        navi.goBack();
                    },
                    style:"default"
                }])
            }

        }).catch(error =>{
            Alert.alert("","이메일 전송중 에러 발생",[{
                text:"OK",
                onPress:()=>{
                    navi.goBack();
                },
                style:"default"
            }])
        });
        */
        sendEmailInfo.settingEmail(emailText)
        settingStep("step2")

    }

    return (
        <View style={{flex:1 , alignItems:"center",backgroundColor:"white"}}>
                <TopText >이메일로 계속하기</TopText>
                <InputIDPASS  placeholder="이메일 입력"
                        value={emailText}
                        onChangeText={(text)=>{setEmailText(text)}}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        />
                {emailCheck? 
                    <WaringText>이메일 형식으로 입력해 주세요(adb@add.com)</WaringText>
                    :null}
                <Tooltip style={{marginTop:20}}>※ '다음'을 누르시면, 입력한 이메일로 인증번호가 전송됩니다.</Tooltip>
                <View style={{flexDirection:"row" , alignSelf:"flex-start"}}>
                    <Tooltip>※ 이미 회원 가입을 하신 경우</Tooltip>
                    <TouchableOpacity onPress={()=>{navi.goBack()}}>
                        <Tooltip style={{textDecorationLine:"underline",color:"blue",marginLeft:0}}> 로그인 </Tooltip>
                    </TouchableOpacity>
                    <Tooltip style={{marginLeft:0}}>해주세요.</Tooltip>
                </View>
                <OpacityRadius8Button text={"Next"} onPress={()=>{sendCode();}} 
                    btnWidth={DisplayWdith-50} btnHeight={baseHeight*40}
                    disable={btnEnable}
                />
        </View>
    )
}