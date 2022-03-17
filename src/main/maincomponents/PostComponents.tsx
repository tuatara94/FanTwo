import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { RowView } from "../../utills/StyledViews";
import { MainListType } from "../../utills/Types";
import { DisplayWdith } from "../../utills/Values";

//썸넴 있는 게시글 
export const ThumbnailPostComponent =(prop:MainListType)=>{
    const [isLike ,setIsLike]=useState(prop.isMyLike);
    //가입 버튼 클릭
    const clickJoin=()=>{
      
    }
    //옵션 버튼 클릭
    const clickOption=()=>{

    }

    //좋아요 버튼 클릭
    const clickLikebtn=()=>{
        setIsLike(prev=>!prev);
    }    

    //댓글 버튼 클릭
    const clickCommentbtn=()=>{

    }

    //Honor 버튼 클릭
    const clickHonorbtn=()=>{

    }

    //Badge 버튼 클릭
    const clickBadge=()=>{

    }
    const navi :NavigationProp<any> =useNavigation();
    //게시글 클릭 
    const clickPost =()=>{
        console.log("게시글 클릭? ")
        navi.navigate("PostDetail")
    }

    
    return (
        <View style={{padding:15,backgroundColor:"#f2f2f2",margin:5,marginBottom:15}}>
            <RowView style={{justifyContent:"space-between"}} >
                <RowView >
                    {/* 썸네일 */}
                    <View style={{borderRadius:15,borderColor:"blue",borderWidth:1,overflow:"hidden"}} >
                        <Image  source={{uri:prop.thumbnailUrl}} 
                        style={{width:30,height:30,maxHeight:30,resizeMode:"cover",borderRadius:15,backgroundColor:"black"}}
                        borderRadius={15}
                        />
                    </View>
                    {/* 게시글 이름 및 작성자와 작성 날짜 */}
                    <View>
                        <Text style={{color:"#797979",fontSize:12,marginLeft:3}}>{prop.title+"("+prop.categoryName+")"}</Text>
                        <Text style={{color:"#797979",fontSize:10,marginLeft:3}}>{"post by "+prop.athour+" | "+prop.createDate}</Text>
                    </View>
                </RowView>

                <RowView style={{alignItems:"center"}}>
                    {/* 참가 여부 */}
                    {prop.isJoin? null:
                        <OpacityRadius8Button 
                            text="+ Join"
                            onPress={()=>{clickJoin()}}   
                            btnHeight={22} 
                            bgColor="white" 
                            textColor="#1e98d7"
                            margin={1}
                            padding= {1}
                            paddingLeft={10} 
                            paddingRight={10}
                            borderColor="#1e98d7"
                            borderWidth={1} 
                            marginRight={17}
                          />
                    }
                    {/* TODO: 옵션 버튼 */}
                    <TouchableWithoutFeedback onPress={()=>{clickOption()}}>
                        <Image source={require("../../../images/channel_btn.png")} style={{width:15,height:19 }}/>
                    </TouchableWithoutFeedback>
                </RowView>
            </RowView>
            <View>
                <View style={{height:1 ,width:DisplayWdith-30,backgroundColor:"white" ,alignSelf:"center",marginVertical:5}}/>
                {/* 내용 */}
                <Text style={{color:"#333333" ,fontSize:14 }} numberOfLines={2}>
                    {prop.text}
                </Text>
                <TouchableWithoutFeedback onPress={()=>{clickPost()}}>
                    <Image  source={{uri:prop.photoUrl}} 
                        style={{width:DisplayWdith-30,height:(DisplayWdith-30)*0.6,backgroundColor:"black",alignSelf:"center",marginTop:12}} 
                    />
                </TouchableWithoutFeedback>
            </View>
            <View style={{flexDirection:"row" ,justifyContent:"space-between" ,marginTop:10}}>
                <RowView >
                    {/* 좋아요 */}
                    <TouchableWithoutFeedback onPress={()=>{clickLikebtn()}}>
                        <RowView >
                            <Image source={isLike? require("../../../images/icon_play_like_active.png"):require("../../../images/icon_play_like.png")} 
                                    style={{width:20,height:20,resizeMode:"stretch"}}/>
                            <Text>{prop.likeCnt}</Text>
                        </RowView>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{clickCommentbtn()}}>
                        <RowView style={{marginLeft:20}}>
                                <Image source={require("../../../images/icon_write_num.png")} 
                                        style={{width:20,height:20,resizeMode:"stretch"}}/>
                                <Text>{prop.commentCnt}</Text>
                        </RowView>
                    </TouchableWithoutFeedback>
                </RowView>
                <RowView >
                    <TouchableWithoutFeedback onPress={()=>{clickHonorbtn()}}>
                        <RowView >
                                <Image source={require("../../../images/icon_gift.png")} 
                                        style={{width:20,height:20,resizeMode:"stretch"}}/>
                                <Text>{prop.honerCnt}</Text>
                        </RowView>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{clickBadge()}}>
                        <RowView >
                                <Image source={require("../../../images/coment_icon_like_n.png")} 
                                        style={{width:20,height:20,resizeMode:"stretch"}}/>
                                <Text>{prop.isBadge? "T":"F"}</Text>
                        </RowView>
                    </TouchableWithoutFeedback>
                </RowView>
            </View>
        </View>
    )

}