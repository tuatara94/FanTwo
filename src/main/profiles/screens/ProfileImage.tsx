import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";

import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';
import { CustomAlertMadal } from "../../../utills/CustomAlertModal";

export const ProfileImage =({route}:any)=>{
    const navi :NavigationProp<any>=useNavigation();
    const [profileImgUrl,setProfileImgUrl]=useState("undifind");
    const [showAlert,setShowAlert]=useState(false);
    const onpressNext =()=>{
        if(profileImgUrl==="undifind"){
            setShowAlert(true);
            return;

        }

        navi.navigate("IntroduceSelf",{
            item:{
                ...route.params.item
            }
        });
    }

    const pickImg=()=>{

        const options :any = {
            mediaType : "photo",
          };

        launchImageLibrary(options,(res)=>{
            if(res.didCancel){

            }else if(res.errorCode){

            }else{
                if(res.assets){
                    res.assets[0].uri?setProfileImgUrl(res.assets[0].uri):null
                }
            }
        })
       
    }


    return (
        <View style={{alignItems:"center",justifyContent:"center",flex:1,padding:30}}>
            <CustomAlertMadal 
                visible={showAlert} 
                text={"프로필 이미지를 선택해주세요."} 
                buttonFnc={[{
                    name:"확인",
                    onClickFnc:()=>{
                        setShowAlert(false);
                    },

                }]} 
                />
            <Text style={{color:"#333333",fontSize:15}}>자신을 형상화해 보세요</Text>

            <TouchableOpacity onPress={pickImg}>
                <Image  source={{uri:profileImgUrl}}
                        style={{width:60,height:60,borderRadius:30,backgroundColor:"black",marginTop:130}}
                />
            </TouchableOpacity>
            <Text style={{color:"black" , fontSize:13,marginTop:30}}>
            커뮤니티나 클럽에서 당신의 글을 알아보고 말 걸어줄겁니다.
            </Text>

            <Text style={{marginTop:106,color:"black"}}>
               이제 얼마 남지 않았어요 조금만 더 나를 보여주세요.
            </Text>
            <TouchableOpacity onPress={onpressNext}>
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