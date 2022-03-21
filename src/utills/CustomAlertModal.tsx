import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { baseHeight, baseWidth } from "./Values";

export const CustomAlertMadal=({visible,title,text,buttonFnc,backColor,textColor,btnTextColor,onbackBoardClick,onRequestClose}:
    {visible:boolean,text:string,buttonFnc:Array<{name:string,onClickFnc:Function}>,title?:string,backColor?:string,textColor?:string,btnTextColor?:string,onbackBoardClick?:Function,onRequestClose?:Function})=>{
    let alertBackgroundColor ="#FFF"
    let alertTextColor ="#000"
    let alertBtnTextColor ="#00F"
    if(backColor){
        alertBackgroundColor=backColor
    }
    if(textColor){
        alertTextColor=textColor
    }
    if(btnTextColor){
        alertBtnTextColor=btnTextColor
    }
    // 1. false false 2. true true 3-1 false true 3-2 
    return ( 
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        statusBarTranslucent={true}
        onRequestClose={()=>{if(onRequestClose)onRequestClose()}}
        >
            <Pressable style={{backgroundColor:"transparent",
                                position:"absolute",
                                top:0,
                                flex:1,
                                width:"100%",
                                height:"100%"}}
                onPress={()=>{if(onbackBoardClick)onbackBoardClick()}}
            />
            <View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
                <View style={{width:baseWidth*250,backgroundColor:alertBackgroundColor,alignItems:"center",borderRadius:10,paddingVertical:10,elevation:10}}>
                    <Text style={{color:alertTextColor,fontSize:20,fontWeight:"400"}} adjustsFontSizeToFit={true}  >{title}</Text>
                    <Text style={{color:alertTextColor,fontSize:15,marginTop:10,minHeight:baseHeight*100,maxHeight:baseHeight*100}} adjustsFontSizeToFit={true} >
                        {text}
                        </Text>
                    <View style={{backgroundColor:"gray",width:"100%",height:0.05,marginTop:10}}></View>
                    <View style={{flexDirection:"row" ,margin:-5}}>
                        {buttonFnc.map((item,index)=>{
                            return (
                                <TouchableOpacity key={index.toString()} style={{flex:1}} onPress={()=>{
                                    if(item.onClickFnc){
                                        item.onClickFnc()
                                    }
                                }}>
                                    <Text style={{color:alertBtnTextColor,textAlign:"center",marginBottom:10,marginTop:10}}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </View>
         
        </Modal>

    )

}