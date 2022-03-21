import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Keyboard, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components/native";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { CustomAlertMadal } from "../../utills/CustomAlertModal";
import { baseHeight, DisplayWdith } from "../../utills/Values";

const InputIDPASS=styled.TextInput`
    width: ${DisplayWdith-50}px;
    height: ${baseHeight*40}px;
    margin-top: 18px;
    background-color: #f2f2f2;
    border-radius: 8px;
    border-width: 1px;
    border-color: #797979;
    text-align: center;
`;
const WaringText=styled.Text`
    align-self  : flex-start;
    margin-left: 25px;
    color:  red;
    font-size: 12px;
`;


export const EmailLoginMain =()=>{

    // 이메일 비밀번호 
    const [emailText,setEmailText]=useState("");
    const [passWordText,setPassWordText]=useState("");
    // 로그인 버튼 활성화 여부
    const [btnEnable,setBtnEnable] =useState(true);
    // 이메일 비밀번호 유효성 체크
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const [emailCheck,setEmailCheck]=useState(false);
    const passWordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/i
    const [passwordCheck,setPasswordCheck]=useState(false);

    // 로그인 오류 modal 
    const [showLoginFailModal,setShowLoginFailModal] = useState(false);
    const [loginFailText,setLoginFailText] =useState("");

    // 회원가입 이동
    const navi :any = useNavigation();

    // id ,password 체크 
    useEffect(()=>{
        //이메일 확인
        if(emailText !== "" && emailRegExp.test(emailText)){
            setEmailCheck(false)
        }else if(emailText === ""){
            setEmailCheck(false)
        }else{
            setEmailCheck(true)
        }
        //비밀번호 확인
        if(passWordText !== "" && passWordRegExp.test(passWordText)){
            setPasswordCheck(false);
        }else if(passWordText === ""){
            setPasswordCheck(false);
        }else{
            setPasswordCheck(true);
        }

        if((emailText !== "" && emailRegExp.test(emailText))&&(passWordText !== "" && passWordRegExp.test(passWordText))){
            setBtnEnable(false)
        }else{
            setBtnEnable(true)
        }
    },[emailText,passWordText])

    const loginStart=()=>{
       
        /**
         *  id: emailText
         *  pw: passWordText
         */
         //TODO : 로그인 통신 해야함 뼈대만 생성 
        /** 
      
        fetch("api/:id/:pw",{
            method:"post",
            headers: {
                "Device-Token":"1eae1a54cfa5fgf53243df5hn4jxgfhsdfhfb.c4h"
            },
            body:JSON.stringify(
                {
                    "id":emailText,
                    "password":passWordText
                }
            )
        }).then((result)=>{result.json()})
        .then((response:any)=>{
            if(response.result==="200"){
                //통과
            }else if(response.result === "300"){
                //계정 불일치
                setLoginFailText("계정이 일치하지 않습니다.")
                setShowLoginFailModal(true);
            }else if(response.result === "400"){
                //비밀번호 불일치
                setLoginFailText("비밀번호를 잊어버린 경우 \n비밀번호 찾기를 해주세요.")
                setShowLoginFailModal(true);
            }
        }).catch((error)=>{
            setLoginFailText("알 수 없는 에러 발생!\n잠시 후 다시 시도해 주시기 바랍니다.")
            setShowLoginFailModal(true);
        })
        *
        */
        setLoginFailText("계정이 일치하지 않습니다.")
        setShowLoginFailModal(true);
        
    }

    const goToRegistPage =()=>{
        setEmailText("");
        setPassWordText("");
        navi.navigate("register",{});

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            {/* 로그인 오류 팝업 */}
            <CustomAlertMadal
                visible={showLoginFailModal}
                text={loginFailText} 
                buttonFnc={[
                    {
                    "name":"OK",
                    "onClickFnc":()=>{
                        setShowLoginFailModal(false);
                    }
                }]}
            />
            <Text style={{marginTop:40,marginLeft:27,fontSize:18,color:"#333333",alignSelf:"flex-start"}}>이메일로 계속하기</Text>
            {/* 이메일 및 비밀번호 입력  */}
            <InputIDPASS  placeholder="이메일 입력" 
                    value={emailText} 
                    onChangeText={(text)=>setEmailText(text)} 
                    autoCapitalize="none"
                    keyboardType="email-address"
                    />
            {emailCheck? 
                <WaringText>이메일 형식으로 입력해 주세요(adb@add.com)</WaringText>
                :null}
            <InputIDPASS  placeholder="비밀번호 입력"
                    value={passWordText}
                    onChangeText={(text)=>setPassWordText(text)}
                    textContentType="password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    />
            {passwordCheck? 
                <WaringText>영문,숫자,특수문자를 각 1개 이상 사용하여야합니다.</WaringText>
                :null}
            {/* 비밀번호 찾기 */}
            <Text style={{marginTop:18,fontSize:12,textDecorationLine:"underline",color:"#333333"}}>비밀번호 찾기</Text>
            
            {/* 로그인 버튼 */}
            <OpacityRadius8Button 
                disable={btnEnable}
                text={"Login"} 
                btnWidth={DisplayWdith-50} 
                btnHeight={baseHeight*40} 
                onPress={loginStart}
                />
            {/* 회원가입 버튼 */}
            <OpacityRadius8Button 
                bgColor="white" 
                text={"Sign Up"} 
                textColor="black" 
                btnWidth={DisplayWdith-50} 
                btnHeight={baseHeight*40} 
                marginTop={81}
                borderColor="#797979"
                borderWidth={1}
                onPress={goToRegistPage}
                />
        </View>
        </TouchableWithoutFeedback>
    )
    
}