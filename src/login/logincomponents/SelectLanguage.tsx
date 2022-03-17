import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styled from "styled-components/native";
import { baseHeight, baseWidth } from "../../utills/Values";

const LanguageContainer=styled.View`
    flex-direction  : row;
    justify-content: flex-end;
    margin-top: 30px;
    padding-right: 15px;
    align-items: center;
`;

export const SelectLanguage =()=>{
    const countries = ["한국어", "English", "日本語", "中国語(簡体)","中国語(繁體)"
                    ,"Bahasa Indonesia","español","français","français"]

    return (
        <LanguageContainer>
            <Image source={require("../../../images/language_logo.png")} 
                    style={{width:baseWidth*20,height:baseHeight*19}}/>
            <SelectDropdown
                dropdownStyle={{backgroundColor:"white"}}
                buttonStyle={{backgroundColor:"white",height:19,width:100}}
                buttonTextStyle={{fontSize:12,color:"#333333"}}
                renderCustomizedRowChild={(item,index)=>{
                    return (
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Image source={require("../../../images/icons_alarm.png")} 
                            />
                            <Text adjustsFontSizeToFit={true} numberOfLines={1}
                                style={{fontSize:12,color:"#333333",textAlign:"center",flex:1}} >
                            {item}
                            </Text> 
                        </View>
                        
                        )
                }}
                data={countries}
                defaultButtonText="English"
                onSelect={(selectedItem, index) => {
                    //선택했을때 호출
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    //dropdown 내려오거나 올라올때 호출
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    //드롭다운 내려올때 각 뷰 수만큼 호출
                    return item
                }}
            />
        </LanguageContainer>
    )

}