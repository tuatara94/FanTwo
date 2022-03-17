import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CustomAlertMadal } from "../../../utills/CustomAlertModal";


export const  InputNickName=()=>{
    const navi :NavigationProp<any>= useNavigation();
    const [myNickName,setMyNickName]=useState("");
    const [isExists,setIsExists]=useState(false);
    const [showAlert,setShowAlert]=useState(false);
    const [alertText,setAlertText]=useState("닉네임 오류")
    const pressNext=()=>{
        console.log(myNickName)
        if(!myNickName && myNickName ===""){
            //닉네임이 없을 경우 리턴 
            setAlertText("닉네임을 입력해주세요.")
            setShowAlert(true);
            return;
        }
        if(myNickName.length>24){
            setAlertText("닉네임은 25자 이내로 입력해 주세요.")
            setShowAlert(true);
            return;
        }
        //중복 아닐경우에만 통과
        if(isExists){
            //닉네임 중복임  
            setAlertText("닉네임이 중복입니다.")
            setShowAlert(true);
            return;
        }else{
            
            navi.navigate("BirthDay",{item:{nickName:myNickName}});
        }
    }

    useEffect(()=>{
        if(myNickName && myNickName !==""){
            //닉네임 중복체크 
            setIsExists(false);
        }else{

        }
    },[myNickName])

    return (
        <View style={{alignItems:"center",justifyContent:"center",flex:1,padding:30}}>
            <Text style={{color:"#333333",fontSize:15}}>당신을 어떻게 불러야 할까요?</Text>

            <TextInput 
                style={{width:"100%",marginTop:130,height:40,borderRadius:6,borderColor:"#999999",backgroundColor:"white"
                        ,textAlign:"center",color:"black"}}
                placeholder="25자 이내로 이름 및 닉네임을 작성하세요."
                placeholderTextColor="#797979"
                value={myNickName}
                onChangeText={(text)=>{setMyNickName(text)}}
            />
            {isExists?
                <Text style={{alignSelf:"flex-start", color:"red",fontSize:12}} >중복된 닉네임 입니다.</Text> : 
                <Text style={{alignSelf:"flex-start", color:"red",fontSize:12}} ></Text>
            }
            <Text style={{color:"black" , fontSize:13,marginTop:30}}>
                이름이나 닉네임을 설정해 누군가가 나를 검색하고 연락하도록 준비해 보세요.
            </Text>

            <Text style={{marginTop:106,color:"black"}}>
                이제 첫발을 디뎠네요 좀 더 자신을 알려주세요.
            </Text>
            <TouchableOpacity onPress={pressNext}>
                <KeyboardAvoidingView >
                    <Text style={{width:278,height:40,marginTop:20,backgroundColor:"#d7d7d7",borderRadius:5,borderWidth:1,borderColor:"#797979"
                                ,textAlign:"center",textAlignVertical:"center"}}>
                        Next
                    </Text>
                </KeyboardAvoidingView>
            </TouchableOpacity>
            <CustomAlertMadal 
                visible={showAlert} 
                text={alertText} 
                buttonFnc={[{
                    name:"확인",
                    onClickFnc:()=>{
                        setShowAlert(false)
                    }
                }]}                
                onbackBoardClick={()=>{
                    setShowAlert(false)
                }}
            />
        </View>
    )
}