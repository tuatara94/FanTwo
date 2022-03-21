import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { TopText, InputIDPASS, OkText, Tooltip } from "../../utills/CustomStyledComponent";
import { DisplayWdith, baseHeight } from "../../utills/Values";



export const RegisterPwView =({settingStep}:{settingStep:Function})=>{
    const [password,setPassword]=useState("");
    const [checkPwReg,setCheckPwReg]=useState(false);
    const passWordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/i

    const [rePassword,setRePassword]=useState("");
    const [checkRePw,setCheckRePw]=useState(false);
    
    const [btnEnable,setBtnEnable]=useState(true);
    
    useEffect(()=>{
        //비밀번호 유효성 체크
        if(password !== "" && passWordRegExp.test(password)){
            setCheckPwReg(true);
        }else if(password === ""){
            setCheckPwReg(false);
        }else{
            setCheckPwReg(false);
        }

        //비밀번호 동일성 체크
        if(password !== "" && rePassword !== "" 
            && password === rePassword){
                setCheckRePw(true)
        }else{
            setCheckRePw(false)
        }

        if(password !== "" && passWordRegExp.test(password) &&
        rePassword !== "" && password === rePassword){
            setBtnEnable(false)
        }else{
            setBtnEnable(true)
        }



    },[password,rePassword]);

    const goToNextStep=()=>{
        /**
         *  비밀번호 전송 
         *  password : password
         */
        settingStep("step4");
    }

    return(
        <View style={{flex:1 , alignItems:"center",backgroundColor:"white"}}>
            <TopText >비밀번호를 설정해주세요</TopText>
            <View >
                <InputIDPASS
                        placeholder="비밀번호 설정"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text)=>{setPassword(text)}} 
                        autoCapitalize="none"
                        />
                {checkPwReg? <OkText>OK</OkText>:null}
            </View>
            <View >
                <InputIDPASS 
                        placeholder="비밀번호 확인"
                        value={rePassword}
                        secureTextEntry={true}
                        onChangeText={(text)=>{setRePassword(text)}}
                        autoCapitalize="none"
                        />
                {checkRePw? <OkText>OK</OkText>:null}
            </View>
            <Tooltip style={{marginTop:10,marginRight:25}}>`※ 8~20자리 이내의 숫자, 영문(대소문자 구분없음), 특수문자(!@#$%&*) 조합으로 설정해주세요. `</Tooltip>
            <OpacityRadius8Button text={"Next"} onPress={goToNextStep} 
                btnWidth={DisplayWdith-50} btnHeight={baseHeight*40}
                marginTop={39}
                disable={btnEnable}
            />
        </View >
    )
}