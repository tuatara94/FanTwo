import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, FlatList, Text, Image, TouchableWithoutFeedback, TouchableOpacity, Animated } from "react-native";
import { Dropdown } from "../../utills/DropDownMenu";
import { RowView } from "../../utills/StyledViews";
import { MainListType } from "../../utills/Types";
import { MainCategory } from "../commonComponents/Category";
import { MainFilter } from "../commonComponents/filterComponents";
import { ThumbnailPostComponent } from "../mainComponents/PostComponents";
import { TrandingView } from "../popularComponents/TrandingComponent";



export const PopularComponent=({popularListItems}:{popularListItems:Array<MainListType|any>})=>{
    const navi : NavigationProp<any> =useNavigation();

    const moveToInputProfile=()=>{
        navi.navigate("InputProfile",{});
    }

    const animate=new Animated.Value(0);
    const show_ani= Animated.timing(
        animate,
        {
            toValue: 40,
            duration: 2000,
            useNativeDriver: false
        }
    )
    const hide_ani=Animated.timing(
        animate,
        {
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }
    )
    
    useEffect(()=>{
        //만약 프로필 입력이 안되어있으면 
        // Animated.timing(
        //     animate,
        //     {
        //         toValue: 40,
        //         duration: 2000,
        //         useNativeDriver: false
        //     }
        // ).start();
        Animated.sequence([
            show_ani
        ]).start(()=>{
            setTimeout(() => {
                hide_ani.start();
            }, 1000);
        })
        // setTimeout(() => {
        //     setProfileView(false);
        // }, 4000);
    },[]);

    return(
        <View>
            <FlatList 
                keyExtractor={(item,index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                data={[{id:"category"},{id:"banner"},{id:"fillter"},...popularListItems]}
                disableVirtualization={false}
                initialNumToRender={5}
                renderItem={({item,index})=>{
                    switch(index){
                        case 0:
                            return (
                                // 카테고리
                                <MainCategory />
                            )
                        case 1:
                            return (
                                //    {/* 트랜딩 */}
                                <TrandingView 
                                    item={[{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"}]}
                                    onClick={()=>{}}
                                    />
                            )
                        case 2:
                            return (
                                // {/* 필터들 */}
                               <MainFilter />
                            )
                        default:
                            {/* 리스트 뷰 ! */}
                            return (
                                // <ThumbnailPostComponent 
                                //     id={item.id} 
                                //     title={item.title}
                                //     text={item.text}
                                //     athour={item.id} 
                                //     createDate={item.createDate}
                                //     categoryName={item.categoryName}
                                //     thumbnailUrl={item.thumbnailUrl} 
                                //     photoUrl={item.photoUrl} 
                                //     likeCnt={item.likeCnt} 
                                //     commentCnt={item.commentCnt}
                                //     honerCnt={item.honerCnt}
                                //     isBadge={item.isBadge} 
                                //     isJoin={item.isJoin} 
                                //     isMyLike={false}
                                //     />
                                null
                            )
                        break;

                    }
                
                }}
                onEndReached={(page)=>{

                }}
                onEndReachedThreshold={1}
            />
            <Animated.View style={[{height:animate},
                {width:"100%",backgroundColor:"#02a7f0",position:"absolute",justifyContent:"center",alignItems:"center"}]}>
                <TouchableOpacity 
                    onPress={moveToInputProfile} 
                    >
                    <Text style={{color:"white"}}>당신에 대해 알려주세요.</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )

}