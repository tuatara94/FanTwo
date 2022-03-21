import React, { useEffect, useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Image, ScrollView, TouchableOpacity, Platform } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment, { Moment } from "moment";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CustomAlertMadal } from "../../../utills/CustomAlertModal";
import {format as prettyFormat} from 'pretty-format'; 

// let DateTiemPicker:any=null;
let DatePicker:any=null
export const InputBirthDay =({route}:any)=>{
    const [pickerShow,setPickerShow]=useState(false);
    const [birthImageUri,setBirthImageUri]=useState(require("../../../images/fish.png"));
    const [myBirthDayText,setMyBirthDayText]=useState("생년 월일을 선택하면 내 별자리가 나타나요.");
    const [myStartLoad,setMyStartLoad]=useState("default");
    const [showAlert,setShowAlert]=useState(false);
    const [alertText,setAlertText]=useState("생년 월일을 선택해주세요.");
    const navi :NavigationProp<any> = useNavigation();
    // const [DateTiemPicker,setDateTiemPicker]:any=useState(null);

    //별자리 선택 
    const setStarPosition=(today :Moment,year :string)=>{
        if(moment((parseInt(year)-1)+".12.22","YYYY.MM.DD")<today && moment(year+".1.20","YYYY.MM.DD")>today){
            //염소 capricorn
            console.log("염소자리")
            setBirthImageUri(require("../../../images/capricorn.png"))
            setMyStartLoad("염소자리")
        }else if(moment(year+".1.21","YYYY.MM.DD")<today && moment(year+".2.19","YYYY.MM.DD")>today){
            //물병 aquaries
            console.log(today.format("YYYY.MM.DD")+"//    물병자리")
            setBirthImageUri(require("../../../images/aquarius.png"))
            setMyStartLoad("물병자리")
        }else if(moment(year+".2.20","YYYY.MM.DD")<today && moment(year+".3.20","YYYY.MM.DD")>today){
            //물고기 fish
            console.log(today.format("YYYY.MM.DD")+"//    자물고리")
            setBirthImageUri(require("../../../images/fish.png"))
            setMyStartLoad("물고기자리")
        }else if(moment(year+".3.21","YYYY.MM.DD")<today && moment(year+".4.20","YYYY.MM.DD")>today){
            //양 aries
            console.log(today.format("YYYY.MM.DD")+"//   양  자리")
            setBirthImageUri(require("../../../images/aries.png"))
            setMyStartLoad("양자리")
        }else if(moment(year+".4.21","YYYY.MM.DD")<today && moment(year+".5.21","YYYY.MM.DD")>today){
            //황소 taurus
            console.log(today.format("YYYY.MM.DD")+"//    황소자리")
            setBirthImageUri(require("../../../images/taurus.png"))
            setMyStartLoad("황소자리")
        }else if(moment(year+".5.22","YYYY.MM.DD")<today && moment(year+".6.21","YYYY.MM.DD")>today){
            // 쌍둥이 gemini
            console.log(today.format("YYYY.MM.DD")+"//    자리쌍둥")
            setBirthImageUri(require("../../../images/gemini.png"))
            setMyStartLoad("쌍둥이자리")
        }else if(moment(year+".6.22","YYYY.MM.DD")<today && moment(year+".7.22","YYYY.MM.DD")>today){
            //게 cancer
            console.log(today.format("YYYY.MM.DD")+"//   게  자리")
            setBirthImageUri(require("../../../images/cancer.png"))
            setMyStartLoad("게다리")
        }else if(moment(year+".7.23","YYYY.MM.DD")<today && moment(year+".8.23","YYYY.MM.DD")>today){
            //사자 leo
            console.log(today.format("YYYY.MM.DD")+"//    사자자리")
            setBirthImageUri(require("../../../images/leo.png"))
            setMyStartLoad("사자자리")
        }else if(moment(year+".8.23","YYYY.MM.DD")<today && moment(year+".9.23","YYYY.MM.DD")>today){
            //처녀 vrigo
            console.log(today.format("YYYY.MM.DD")+"//    처녀자리")
            setBirthImageUri(require("../../../images/virgo.png"))
            setMyStartLoad("처녀자리")
        }else if(moment(year+".9.24","YYYY.MM.DD")<today && moment(year+".10.23","YYYY.MM.DD")>today){
            //천칭 libra
            console.log(today.format("YYYY.MM.DD")+"//    천칭자리")
            setBirthImageUri(require("../../../images/libra.png"))
            setMyStartLoad("천칭자리")
        }else if(moment(year+".10.24","YYYY.MM.DD")<today && moment(year+".11.22","YYYY.MM.DD")>today){
            //전갈 scropio
            console.log(today.format("YYYY.MM.DD")+"//    전갈자리")
            setBirthImageUri(require("../../../images/scorpio.png"))
            setMyStartLoad("전갈자리")
        }else if(moment(year+".11.23","YYYY.MM.DD")<today && moment(year+".12.21","YYYY.MM.DD")>today){
            //사수 sagittarius
            console.log(today.format("YYYY.MM.DD")+"//    사수자리")
            setBirthImageUri(require("../../../images/sagittarius.png"))
            setMyStartLoad("사수자리")
        }else if(moment(year+".12.22","YYYY.MM.DD")<today && moment((parseInt(year)+1)+".1.20","YYYY.MM.DD")>today){
            //염소 capricorn
            console.log(today.format("YYYY.MM.DD")+"//    염소자리")
            setBirthImageUri(require("../../../images/capricorn.png"))
            setMyStartLoad("염소자리")
        }
    }


    useEffect(()=>{
        console.log(Platform.OS)
        if(Platform.OS==="android"||Platform.OS==="ios"){
            import('@react-native-community/datetimepicker').then(module=>{
                DatePicker=module.default
            })
        }else{

        }
    })
    

    const onChange = (event: any, selectedDate: Date|undefined) => {
        const currentDate = selectedDate;
        setPickerShow(false)
        if(currentDate){
            const today = moment(currentDate);
            const year = today.format("YYYY").toString();
            setStarPosition(today,year);
            setMyBirthDayText(today.format("YYYY.MM.DD"));
        }
        
    };
    /**
     *  12/22 ~ 1/20 염소 capricorn
     *  1/21 ~ 2/19 물병 aquaries
     *  2/20 ~ 3/20 물고기 fish
     *  3/21 ~ 4/20 양 aries
     *  4/21 ~ 5/21 황소 taurus
     *  5/22 ~ 6/21 쌍둥이 gemini
     *  6/22 ~ 7/22 게 cancer
     *  7/23 ~ 8/22 사자 leo
     *  8/23 ~ 9/23 처녀 vrigo
     *  9/24 ~ 10/23 천칭 libra
     *  10/24 ~ 11/22 전갈 scropio
     *  11/23 ~ 12/21 사수 sagittarius
     **/
    const pressOnNext =()=>{
        console.log(myStartLoad);
        console.log(myStartLoad==="default")
        if(myStartLoad==="default"){
            setShowAlert(true);
            return;
        }

        navi.navigate("Gender",{
            item:{
                ...route.params.item,
                ...{
                myBirthday:myBirthDayText,
                myStarLoad:myStartLoad
                }
            }
        });
    }

    return(
        <ScrollView>
            <View style={{alignItems:"center",justifyContent:"center",flex:1,padding:30}}>
                <Text style={{color:"#333333",fontSize:15}}>당신의 별자리가 궁금해요</Text>

                <TouchableOpacity onPress={()=>{
                    setPickerShow(true);
                }}
                style={{width:"100%",justifyContent:"center",flex:1,alignItems:"center",marginTop:130,height:40
                ,borderRadius:6,borderColor:"#999999",backgroundColor:"white"}}
                >
                    <View >
                        <Text style={{width:"100%",textAlign:"center",color:"black"}}>
                            {myBirthDayText}
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style={{color:"black" , fontSize:13,marginTop:30}}>
                별자리를 선택하면 나의 성향을 분석해 나만의 콘텐츠가 제공됩니다.
                </Text>

                <Image 
                    source={birthImageUri}
                    style={{width:265,height:223}}
                />

                <Text style={{marginTop:106,color:"black"}}>
                나 자신을 더 채워 보세요 누군가가 나를 기억해줄 겁니다.
                </Text>
                <TouchableOpacity onPress={pressOnNext}>
                    <KeyboardAvoidingView >
                        <Text style={{width:278,height:40,marginTop:20,backgroundColor:"#d7d7d7",borderRadius:5,borderWidth:1,borderColor:"#797979"
                                    ,textAlign:"center",textAlignVertical:"center"}}>
                            Next
                        </Text>
                    </KeyboardAvoidingView>
                </TouchableOpacity>
                {pickerShow && DatePicker?(
                    <DatePicker
                        testID="dateTimePicker"
                        value={new Date()}
                        mode="date"
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                    />
                ):null}
            </View>
            <CustomAlertMadal 
                visible={showAlert} 
                text={alertText} 
                buttonFnc={[
                    {
                        name:"확인",
                        onClickFnc:()=>{
                            setShowAlert(false)
                        }
                    }
                ]} 
                onbackBoardClick={()=>{
                    setShowAlert(false)
                }}
                />
        </ScrollView>

    )

}