import React, { useEffect, useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { useStore } from "../../store/Context";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { InputIDPASS, Tooltip, TopText } from "../../utills/CustomStyledComponent";
import { DisplayWdith, baseHeight } from "../../utills/Values";

export const InputCodeView =({settingStep}:{settingStep:Function})=>{
    const [emailCode,setEmailCode]=useState("");
    const [btnEnable,setBtnEnable]=useState(true);
    const [codeTime,setCodeTime]=useState(0);
    const {sendEmailInfo}=useStore();
    useEffect(()=>{
        if(emailCode!=""){
            setBtnEnable(false);
        }
    },[emailCode]);

    const resendEmail=()=>{
        setCodeTime(600);

    }
    //이메일 재전송시
    useEffect(()=>{
        //TODO : 메일 인증 성공적으로 보냈을경우
        resendEmail();

    },[])

    //Timer
    useEffect(()=>{
        const dd=setTimeout(()=>{
            if(codeTime==0) return;
            if(codeTime>0){
                setCodeTime(prev=>prev-1);
            }else{
                //TODO : 인증 만료! 
            }
        },1000)
        return ()=>{clearTimeout(dd)}
    },[codeTime])

    const goToNextStep=()=>{
        settingStep("step3");
    }

    return(
        <View style={{flex:1 , alignItems:"center",backgroundColor:"white"}}>
            <TopText >인증번호를 입력해주세요</TopText>
            <InputIDPASS value={emailCode}
                    onChangeText={(text)=>{setEmailCode(text)}}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    />
            <Tooltip style={{marginTop:20}}>{`※ ${sendEmailInfo.emailOfSendCode} 이메일로 인증번호가 전송됩니다.`}</Tooltip>
            <View style={{flexDirection:"row" , alignSelf:"flex-start"}}>
                <Tooltip>※ 전송된 인증번호는 10분 안에 인증이 만료됩니다.</Tooltip>
            </View>
            <OpacityRadius8Button text={"Next"} onPress={goToNextStep} 
                btnWidth={DisplayWdith-50} btnHeight={baseHeight*40}
                disable={btnEnable}
            />
            <View style={{alignSelf:"flex-start",marginLeft:25,flexDirection:"row"}}>
                <Text style={{fontSize:11}}>{`남은 시간 : ${parseInt((codeTime/60).toString())}:${(codeTime%60).toString().length==1? "0"+(codeTime%60):(codeTime%60)}`}</Text>
                <TouchableOpacity onPress={resendEmail}>
                    <Text style={{fontSize:11,marginLeft:10,color:"blue",textDecorationLine:"underline"}}>재전송</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}