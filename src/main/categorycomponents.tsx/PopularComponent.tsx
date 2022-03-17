import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, FlatList, Text, Image, TouchableWithoutFeedback, TouchableOpacity, Animated } from "react-native";
import { Dropdown } from "../../utills/DropDownMenu";
import { RowView } from "../../utills/StyledViews";
import { MainListType } from "../../utills/Types";
import { MainBanner } from "../maincomponents/MainBannerComponent";
import { ThumbnailPostComponent } from "../maincomponents/PostComponents";
import { MainCategory } from "../screens/FantooMainScreen";


const TrandingView =({item,onClick}:{item:Array<any>,onClick:Function})=>{

    return (
        <View >
            <RowView style={{justifyContent:"space-between",paddingHorizontal:10,marginVertical:14}}>
                <Text>Trending</Text>
                <Text>View all</Text>
            </RowView>
            <FlatList 
                keyExtractor={(item,index)=>index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={item}
                renderItem={({item})=>{
                    return(
                        <TouchableWithoutFeedback onPress={()=>{onClick(item.title)}}>
                            <View style={{margin:5,justifyContent:"center"}}>
                                    <Image source={{uri:"dd"}} style={{width:138,height:78,backgroundColor:"gray"}}
                                    />
                                    <Text style={{color:"black",
                                            position:"absolute",
                                            alignSelf:"center"
                                            }}>{"프로모션 "+item.title} </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )                                            
                }}                                    
            />
        </View>
    )
}


export const PopularComponent=({popularListItems}:{popularListItems:Array<MainListType|any>})=>{
    const navi : NavigationProp<any> =useNavigation();
    const [profileView,setProfileView]=useState(true);

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
                                <RowView style={{marginTop:12,borderTopWidth:0.2 , borderColor:"black",padding:9,justifyContent:"space-between"}}>
                                    <Dropdown 
                                        data={[{title:"card"},{title:"Thunmbnail"},{title:"Text"}]}
                                        labelView={()=>{
                                            return(
                                                <View style={{width:30,height:20,borderWidth:1,borderColor:"black"}} />
                                            )
                                        }}
                                        itemRender={(item:any,index:any)=>{
                                            return(
                                                <RowView key={index} style={{margin:10}}>
                                                    <Text>{item.title}</Text>
                                                </RowView>
                                            )
                                        }}
                                        alignDropDown="left"
                                        dropWidth={100}
                                        onSelect={()=>{}} />
                                    <RowView>
                                        {/* 번역 드롭 다운  */}
                                        <Dropdown 
                                            labelView={()=>{
                                                return(
                                                    <Image source={require("../../../images/language_logo.png")} 
                                                    style={{width:30,height:20 , marginRight:10}}
                                                    />
                                                    )
                                                }}
                                            data={[{title:"한국어"},{title:"영어"},{title:"중국어"},{title:"일본어"},{title:"불어"}]}
                                            itemRender={(item:any,index:any )=>{
                                                return(
                                                    <RowView key={index} style={{margin:10}}>
                                                        <Text>{item.title}</Text>
                                                    </RowView>
                                                )
                                            }}
                                            alignDropDown="right"
                                            dropWidth={100}
                                            onSelect={()=>{}} />
                                       
                                          <Dropdown 
                                            labelView={()=>{
                                                return(
                                                    <Image source={require("../../../images/icon_main_setting.png")} 
                                                    style={{width:30,height:20 , marginRight:10}}
                                                    />
                                                    )
                                                }}
                                            data={[{title:"추천"},{title:"인기"},{title:"최신"},{title:"선호"},{title:"댓글"}]}
                                            itemRender={(item:any ,index:any )=>{
                                                return(
                                                    <RowView key={index} style={{margin:10}}>
                                                        <Text>{item.title}</Text>
                                                    </RowView>
                                                )
                                            }}
                                            alignDropDown="right"
                                            dropWidth={100}
                                            onSelect={()=>{}} />
                                    </RowView>
                                </RowView>
                            )
                        default:
                            {/* 리스트 뷰 ! */}
                            return (
                                <ThumbnailPostComponent 
                                    id={item.id} 
                                    title={item.title}
                                    text={item.text}
                                    athour={item.id} 
                                    createDate={item.createDate}
                                    categoryName={item.categoryName}
                                    thumbnailUrl={item.thumbnailUrl} 
                                    photoUrl={item.photoUrl} 
                                    likeCnt={item.likeCnt} 
                                    commentCnt={item.commentCnt}
                                    honerCnt={item.honerCnt}
                                    isBadge={item.isBadge} 
                                    isJoin={item.isJoin} 
                                    isMyLike={false}
                                    />
                            )
                        break;

                    }
                
                }}
                onEndReached={(page)=>{

                }}
                onEndReachedThreshold={1}
            />
            {
                profileView?
                    <Animated.View style={[{height:animate},
                        {width:"100%",backgroundColor:"#02a7f0",position:"absolute",justifyContent:"center",alignItems:"center"}]}>
                        <TouchableOpacity 
                            onPress={moveToInputProfile} 
                           >
                            <Text style={{color:"white"}}>당신에 대해 알려주세요.</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    :null
            }
        </View>
    )

}