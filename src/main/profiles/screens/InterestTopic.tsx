import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, FlatList } from "react-native";
import { CustomAlertMadal } from "../../../utills/CustomAlertModal";

export const InterestTopic =({route}:any)=>{

    const [interestList,setInterestList]=useState([
        {
            name:"KPOP",
            isPick:false
        },
        {
            name:"드라마/영화",
            isPick:false
        },
        {
            name:"뷰티",
            isPick:false
        },
        {
            name:"문화",
            isPick:false
        },
        {
            name:"유머",
            isPick:false
        },
        {
            name:"포토",
            isPick:false
        },
        {
            name:"추가관심사",
            isPick:false
        },
        {
            name:"추가관심사",
            isPick:false
        },

    ])
    const [changeInfo,setChangeInfo]=useState(true);
    const [showAlert,setShowAlert]=useState(false);


    const selectInterest=(index : number)=>{
        setInterestList(prev =>{
            prev[index].isPick=!prev[index].isPick
            return prev
        })
        setChangeInfo(prev=>!prev);
    }
    //선택된 애들 
    const navi : NavigationProp<any> = useNavigation();
    const onPressNext = () =>{
        if(Array.isArray((interestList.filter((item)=>item.isPick==true)))&&
                (interestList.filter((item)=>item.isPick==true)).length=== 0 ){
            setShowAlert(true)
        }else{
            navi.navigate("PhoneAuth",{
                item:{
                    ...route.params.item,
                    ...{
                        myInterest:interestList.filter((item)=>item.isPick==true)
                    }
                }
            });
        }
    }
    return(
        <View style={{alignItems:"center",justifyContent:"center",flex:1,padding:30,backgroundColor:"white"}}>
            <CustomAlertMadal 
                visible={showAlert} 
                text={"관심사가 없는게 맞나요?ㅠㅜ"} 
                buttonFnc={[
                    {
                        name:"취소",
                        onClickFnc:()=>{
                            setShowAlert(false);
                        }
                    },
                    {
                        name:"넹",
                        onClickFnc:()=>{
                            setShowAlert(false);
                            navi.navigate("PhoneAuth",{
                                item:{
                                    ...route.params.item,
                                    ...{
                                        myInterest:interestList.filter((item)=>item.isPick==true)
                                    }
                                }
                            });
                        }
                    }
                ]}            
            />
            <Text style={{color:"#333333",fontSize:15}}>지금 무슨 생각 하나요?</Text>
            <FlatList 
                data={interestList}
                keyExtractor={(item,index)=>index.toString()}
                numColumns={4}
                style={{marginTop:130,flexGrow:0}}
                renderItem={({item,index})=>{
                    return (
                        <TouchableOpacity style={{marginHorizontal:5,marginVertical:5}} onPress={()=>{
                            selectInterest(index)
                        }}>
                            <Text style={{padding:5,paddingHorizontal:10,borderRadius:13,borderWidth:1,height:26,fontSize:12}}>{item.isPick? "# "+item.name: "+ "+item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            
            />
            <Text style={{color:"black" , fontSize:13,marginTop:10}}>
                관심사를 넓혀보세요 깊은 생각에 도움을 드려볼게요.
            </Text>

            <Text style={{marginTop:106,color:"black"}}>
            이제 끝이 보이네요 조금만 더 진행해보세요.
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