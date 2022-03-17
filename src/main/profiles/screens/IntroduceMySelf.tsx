import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { CustomAlertMadal } from "../../../utills/CustomAlertModal";


export const IntroduceMySelf =({route}:any)=>{
    const navi :NavigationProp<any> =useNavigation();
    const [introduceText,setIntroduceText]=useState("");
    const [showAlert,setShowAlert]=useState(false);
    const onpress =()=>{
        if(introduceText===""){
            setShowAlert(true);
            return;
        }

        console.log({...route.params.item,...{content:introduceText}})
        navi.reset({routes:[{name:"FantooMain"}]})

    }

    return(
        <View style={{alignItems:"center",justifyContent:"center",flex:1,padding:30}}>
            <CustomAlertMadal 
                visible={showAlert} 
                text={"당신에 대해 알려주세용~"} 
                buttonFnc={[
                    {
                        name:"입력할게요",
                        onClickFnc:()=>{
                            setShowAlert(false);
                        }
                    }
                ]} 
                />
            <Text style={{color:"#333333",fontSize:15}}>당신의 비밀을 조금만 알려주세요!</Text>

            <TextInput 
                style={{width:"100%",marginTop:130,height:84,borderRadius:6,borderColor:"#999999",backgroundColor:"white"
                        ,textAlign:"center",color:"black"}}
                value={introduceText}
                onChangeText={(text)=>{
                    setIntroduceText(text);
                }}

            />
            <Text style={{color:"black" , fontSize:13,marginTop:30}}>
            누군가를 초대하거나 대화를 요청할 때 당신이 어떤 사람인지 조금만 알려주면 초대에 쉽게 응할 겁니다.
            </Text>

            <Text style={{marginTop:106,color:"black"}}>
            이제 자신을 보여줄 준비가 됐습니다. 자유로운 커뮤니티와 팬투의 다양한 서비스에 빠져보세요.
            </Text>
            <TouchableOpacity onPress={onpress} >
                <KeyboardAvoidingView >
                    <Text style={{width:278,height:40,marginTop:20,backgroundColor:"#d7d7d7",borderRadius:5,borderWidth:1,borderColor:"#797979"
                                ,textAlign:"center",textAlignVertical:"center"}}>
                        Completion
                    </Text>
                </KeyboardAvoidingView>
            </TouchableOpacity>
        </View>
    )

}