import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import { CustomAlertMadal } from "../../../utills/CustomAlertModal";


export const PhoneAuth = ({route}:any)=>{
    const navi :NavigationProp<any>= useNavigation();
    const [startAuth,setStartAuth]=useState(false);
    const [timerTime,setTimerTime]=useState(0);
    const [authText,setAuthText]=useState("인증 요청");
    const [showAlert,setShowAlert]=useState(false);
    const [authCode,setAuthCode]=useState("");
    const onPressNext=()=>{
        console.log(!startAuth)
        console.log(authCode)
        console.log(authCode==="")
        if(!startAuth){
            setShowAlert(true);
            return;
        }
        if(authCode===""){
            setShowAlert(true);
            return;
        }
        setTimerTime(0);

        navi.navigate("ProfileImage",{
            item:{
                ...route.params.item,
                ...{
                    phoneAuth:true
                }
            }

        });
    }

    //인증 요청 
    const phoneAuthRequest=()=>{
        setAuthText("재 전송")
        setStartAuth(true);
        startTimer()
    }
    
    useEffect(()=>{
        if(timerTime>0){
            const timer = setTimeout(()=>{
                console.log("숫자 -1 ")
                console.log(timerTime)
                setTimerTime(prev=>prev-1);
            },1000);
            return ()=>{
                console.log("hook 제거 ;")
                clearTimeout(timer);
            }
        }

    },[timerTime])

    const startTimer=()=>{
        setTimerTime(180)
    }
    return(
        <View style={{alignItems:"center",justifyContent:"center",flex:1,padding:30,backgroundColor:"white"}}>
            <CustomAlertMadal 
                visible={showAlert} 
                text={"핸드폰 인증을 해주세요."} 
                buttonFnc={[{
                    name:"확인",
                    onClickFnc:()=>{
                        setShowAlert(false);
                    }
                }]}
            />
            <Text style={{color:"#333333",fontSize:15}}>리워드를 받아보세요</Text>

            <Text style={{alignSelf:"flex-start",marginTop:130}}>전화번호 인증</Text>
            <View style={{flexDirection:"row"}}>
                {/* 국가코드 변경 다이알로그로 변경 */}
                <Text style={{height:40,borderBottomColor:"#797979",borderBottomWidth:1,justifyContent:"center"
                        ,textAlign:"center",textAlignVertical:"center"}} >{"+82     >"}</Text>
                <View style={{height:40,flexDirection:"row",borderBottomColor:"#797979",borderBottomWidth:1
                            ,marginLeft:30,flex:1,alignItems:"center",justifyContent:"space-between"}}>
                    <TextInput style={{height:40}}/>
                    <TouchableOpacity onPress={phoneAuthRequest}>
                        <Text style={{paddingHorizontal:15,fontSize:11,backgroundColor:"blue",color:"white",borderRadius:10,height:20}} >{authText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {startAuth?
                <>
                    <TextInput 
                            style={{
                                justifyContent:"center",alignItems:"center",paddingVertical:10,marginTop:15,borderColor:"#797979"
                                    ,backgroundColor:"#f9f9f9",borderWidth:1,width:"100%",borderRadius:5
                            }}
                            placeholder="인증 번호 입력"
                            textAlign="center"
                            keyboardType="number-pad"
                            value={authCode}
                            onChangeText={(text)=>setAuthCode(text)}
                        />
                     <Text style={{alignSelf:"flex-start"}}>{"남은 시간 : "+timerTime}</Text>
                </>
               
                :
                null
            }
            <Text style={{marginTop:106,color:"black"}}>
            다양한 활동 및 이벤트, 클럽 리위드 참여 등을 위해 전화번호 인증이 꼭 필요합니다.
            </Text>
            <TouchableOpacity onPress={onPressNext}>
                <KeyboardAvoidingView >
                    <Text style={{width:278,height:40,marginTop:20,backgroundColor:"#d7d7d7",borderRadius:5,borderWidth:1,borderColor:"#797979"
                                ,textAlign:"center",textAlignVertical:"center"}}>
                        Next
                    </Text>
                </KeyboardAvoidingView>
            </TouchableOpacity>
        </View>
    )
}