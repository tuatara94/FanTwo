import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { RowView } from "../../utills/StyledViews";

export const CardComponent =({item}:any)=>{
    return (
        <View  style={{backgroundColor:"#f2f2f2",marginBottom:4}}>
            <RowView style={{alignItems:"center",justifyContent:"space-between"}}>
                <RowView style={{alignItems:"center"}}>
                    <Text style={{fontSize:9,textAlign:"center",alignSelf:"center"
                        ,borderColor:"#797979",borderWidth:1,borderRadius:5
                        ,margin:3,padding:2
                        }}>게시판명</Text>
                    <Image source={{uri:"ff"}} style={{width:15,height:15,borderRadius:7.5,backgroundColor:"gray",marginLeft:9}}/>
                    <Text style={{fontSize:9 ,marginLeft:3}}>{item.athour}</Text>
                    <Text style={{fontSize:9 ,marginLeft:5}}>{item.createDate}</Text>
                </RowView>
                <Text style={{marginRight:15}}>옵션 버튼</Text>
            </RowView>
            <RowView style={{justifyContent:"space-between",paddingHorizontal:17,marginTop:11}}>
                <Text style={{maxHeight:60,maxWidth:246,marginRight:20}}>{item.text}</Text>
                <Image source={{uri:"ff"}}
                    style={{width:92,height:56,backgroundColor:"gray"}}
                    />
            </RowView>
            <RowView style={{justifyContent:"space-between",paddingHorizontal:17,marginTop:11,marginBottom:4}}>
                <RowView>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <RowView >
                        <Image source={item.isLike? require("../../../images/icon_play_like_active.png"):require("../../../images/icon_play_like.png")} 
                                style={{width:20,height:20,resizeMode:"stretch"}}/>
                        <Text>{item.likeCnt}</Text>
                    </RowView>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <RowView style={{marginLeft:20}}>
                            <Image source={require("../../../images/icon_write_num.png")} 
                                    style={{width:20,height:20,resizeMode:"stretch"}}/>
                            <Text>{item.commentCnt}</Text>
                    </RowView>
                </TouchableWithoutFeedback>
                </RowView>
                <RowView>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <RowView >
                            <Image source={require("../../../images/icon_gift.png")} 
                                    style={{width:20,height:20,resizeMode:"stretch"}}/>
                            <Text>{item.honerCnt}</Text>
                    </RowView>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <RowView >
                            <Image source={require("../../../images/coment_icon_like_n.png")} 
                                    style={{width:20,height:20,resizeMode:"stretch"}}/>
                            <Text>{item.isBadge? "T":"F"}</Text>
                    </RowView>
                </TouchableWithoutFeedback>
                </RowView>
            </RowView>
        </View>
    )
}