import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ScrollView, View, TouchableWithoutFeedback, Text, TouchableOpacity, Alert, Modal, Image, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "../../store/Context";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { InputIDPASS, TopText } from "../../utills/CustomStyledComponent";
import { DisplayWdith, baseHeight } from "../../utills/Values";

import { CountryModal } from "./CountrySelectModal";


const AgreeCheckBoxs=(props:any)=>{

    return (
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                <View  style={{flexDirection:"row",alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress={()=>{
                        props.changeCheck((prev:any)=> !prev)
                    }}>
                        <View style={{
                            width:15,height:15,backgroundColor:props.isCheck?"blue":undefined,
                            borderRadius:5,borderColor:"black",borderWidth:1,
                            margin:3}} >
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={{color:"#333333",fontSize:13}}>{props.text}</Text>
                    <Text style={{color:props.require?"red":"blue",fontSize:13}}>{props.require? "(필수)": "(선택)"} </Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    Alert.alert("",props.text,[{
                        text:"OK",
                        style:"cancel"
                    }])
                }}>
                    <Text style={{fontSize:13,textDecorationLine:"underline"}}>보기</Text>
                </TouchableOpacity>
        </View>
    )
}

export const AgreePolicyView = observer(({settingStep}:{settingStep:Function})=>{
    const [checkFirst,setCheckFirst]=useState(false);
    const [checkSec,setCheckSec]=useState(false);
    const [checkThird,setCheckThird]=useState(false);
    const [checkFour,setCheckFour]=useState(false);
    const [checkFive,setCheckFive]=useState(false);
    const [recommendCode,setRecommendCode]=useState("");
    const [selectContry,setSelectContry]=useState(true);
    const [btnEnable,setBtnEnable]=useState(true);
    const {registSelectCountry}=useStore();
    useEffect(()=>{
        if(checkSec && checkThird &&checkFour && checkFive){
            setCheckFirst(true);
        }else{
            setCheckFirst(false);
        }

        if(checkSec && checkThird &&checkFour && selectContry){
            setBtnEnable(false);
        }else{
            setBtnEnable(true);
        }
    },[checkSec,checkThird,checkFour,checkFive])

    const servicePolicys =[
        {
            "name":"service",
            "require":true,
            "url" : "dd",
            "isCheck":checkSec,
            "changeFunc":setCheckSec,
            "text":"서비스 이용약관 동의"
            
        },
        {
            "name":"personal",
            "require":true,
            "url" : "dd",
            "isCheck":checkThird,
            "changeFunc":setCheckThird,
            "text":"개인정보 취급방치 동의"
        },
        {
            "name":"yousProtect",
            "require":true,
            "url" : "dd",
            "isCheck":checkFour,
            "changeFunc":setCheckFour,
            "text":"청소년 보호정책"
        }, 
        {
            "name":"event",
            "require":false,
            "url" : "dd",
            "isCheck":checkFive,
            "changeFunc":setCheckFive,
            "text":"이벤트 정보 수신동의"
        }
    
    ];
    const navi :any=useNavigation();
    const gotoMain = ()=>{
        navi.reset({routes:[{name:"Main"}]});
    }


    const [countryModalVisible,setCountryModalVisible]=useState(false);


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:"white"}}>
            <View style={{flex:1,backgroundColor:"white"}}>
                <CountryModal visible={countryModalVisible} setVisible={setCountryModalVisible} />
                <TopText >약관에 동의해주세요</TopText>
                {/* 약관 체크 박스 */}
                <View style={{flexDirection:"row",marginTop:26,marginLeft:26,alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress={()=>{
                        setCheckSec(!checkFirst)
                        setCheckThird(!checkFirst)
                        setCheckFour(!checkFirst)
                        setCheckFive(!checkFirst)
                        setCheckFirst(pre=>!pre)
                    }}>
                        <View style={{
                            width:15,height:15,backgroundColor:checkFirst?"blue":undefined,
                            borderRadius:5,borderColor:"black",borderWidth:1,
                            margin:3}} >
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={{color:"#333333",fontSize:13}}>약관에 모두 동의합니다.</Text>
                </View>
                <View style={{width:DisplayWdith-50,height:baseHeight*140,borderWidth:1,borderColor:"black",marginLeft:25,padding:13}}>
                    {servicePolicys.map((item,index)=>{
                        return (
                            <AgreeCheckBoxs key={index.toString()}
                            text={item.text} 
                            uri={item.url} 
                            require={item.require} 
                            isCheck={item.isCheck}
                            changeCheck={item.changeFunc}
                            />
                        )
                    })}
                </View>
                {/*국적 및 추천인 코드 */}
                <View style={{width:DisplayWdith-50 , height:1, backgroundColor:"#d7d7d7",marginTop:27,alignSelf:"center"}}/>
                <View >
                    <View style={{flexDirection:"row",marginTop:baseHeight*35}}>
                        <Text style={{marginLeft:25}}>국적 선택</Text>
                        <Text style={{color:"red",fontSize:13}}>(필수)</Text>
                    </View>
                    <View style={{alignItems:"center",marginTop:baseHeight*10,}}>
                        <TouchableOpacity onPress={()=>{
                            setCountryModalVisible(true);
                        }}>
                            <Text style={{width:DisplayWdith-50 ,height:baseHeight*40,borderWidth:1,borderColor:"black",backgroundColor:"white",textAlign:"center",textAlignVertical:"center"}}>
                                {registSelectCountry.selectCountry==""? "국가 선택":registSelectCountry.selectCountry }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",marginLeft:25,marginTop:baseHeight*16 }}>
                        <Text>추천인 코드</Text>
                        <Text style={{color:"blue",fontSize:13}}>(선택)</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <InputIDPASS 
                            placeholder="추천인 코드 입력"
                            value={recommendCode}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(text)=>{setRecommendCode(text)}} />
                    </View>
                </View>
                {/* 다음 버튼 */}
                <OpacityRadius8Button text={"Completed"} onPress={()=>{
                   gotoMain();

                }} marginTop={38} disable={btnEnable}/>

            </View>
        </ScrollView>
    )
})