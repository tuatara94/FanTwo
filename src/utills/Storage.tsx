import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { APPFIRST_CHECK_KEY, IS_LOGIN_CHECK_KEY } from "./Consts";

export const setCheckFirstItem = async (isFirst :boolean) => {
    await AsyncStorage.setItem(APPFIRST_CHECK_KEY,JSON.stringify(isFirst))
}
export const getCheckFirstItem=async () :Promise<boolean>=>{
    const returnValue =await AsyncStorage.getItem(APPFIRST_CHECK_KEY);
    if(!returnValue){
        return false
    }else{
        return JSON.parse(returnValue)
    }
}   
    

export const setCheckLogin = async () => {
    await AsyncStorage.setItem(IS_LOGIN_CHECK_KEY,"")
}
export const getCheckLogin = async () :Promise<boolean> => {
    const returnValue = await AsyncStorage.getItem(IS_LOGIN_CHECK_KEY);
    if(!returnValue){
        return false
    }else{
        return JSON.parse(returnValue)
    }

}