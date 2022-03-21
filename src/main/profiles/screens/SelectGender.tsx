import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import { CustomAlertMadal } from "../../../utills/CustomAlertModal";
import { Dropdown } from "../../../utills/DropDownMenu";

export const SelectGender=({route}:any)=>{

    const navi : NavigationProp<any> = useNavigation();
    const [selectGender,setSelectGender]=useState("none");
    const [showAlert,setShowAlert]=useState(false);
    const [alertText,setAlertText]=useState("성별을 선택해주세요.")
    const onPressNext=()=>{
        if(selectGender==="none"){
            setShowAlert(true);
            return;
        }
        navi.navigate("Interest",{
            item:{
                ...route.params.item,
                ...{
                    gender:selectGender
                }
            }
        });
    }
    return(
            <View style={{alignItems:"center",justifyContent:"center",flex:1,padding:30}}>
                <CustomAlertMadal 
                    visible={showAlert} 
                    text={alertText} 
                    buttonFnc={[
                        {
                            name:"확인",
                            onClickFnc:()=>{
                                setShowAlert(false);
                            }
                        }
                    ]}  
                    onbackBoardClick={()=>{setShowAlert(false)}}              
                />
                <Text style={{color:"#333333",fontSize:15}}>성별을 알려주세요!</Text>

                <Text style={{}} >성별</Text>
                <Dropdown 
                    data={["남","여","선택안함"]} 
                    onSelect={(item)=>{
                        console.log(item)
                        setSelectGender(item)
                    }} 
                    dropWidth={350} 
                    labelView={()=>{
                        return <View style={{width:350,justifyContent:"center",alignItems:"center",marginTop:5,height:40
                        ,borderRadius:6,borderColor:"#999999",backgroundColor:"white"}}>
                            <Text style={{textAlign:"center",color:"black"}}>{selectGender==="none"?"성별을 선택해 주세요.":selectGender}</Text>
                            </View>
                    }} 
                    alignDropDown={"center"} 
                    itemRender={(item:any,index:any)=>{
                        return(
                                <Text key={index}>{item}</Text>
                        )
                    }}                
                />

                <Text style={{color:"black" , fontSize:13,marginTop:30}}>
                성별에 따른 다양한 콘텐츠도 알아보고 보여드릴게요.
                </Text>

                <Text style={{marginTop:106,color:"black"}}>
                누군가 나을 기억해주기를 바란다면 자신을 더 보여주세요.
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