import React, { useMemo } from "react";
import { View, FlatList, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Dropdown } from "../../utills/DropDownMenu";
import { RowView } from "../../utills/StyledViews";
import { MainListType } from "../../utills/Types";
import { MainCategory } from "../commonComponents/Category";
import { CommunityPost } from "../communityComponents/CommunityPost";
import { CommunityNotice } from "../communityComponents/NoticeComponent";
import { ThumbnailPostComponent } from "../mainComponents/PostComponents";
import { CardComponent } from "../communityComponents/CardComponent";

export const CommintyComponent =({communityList}:{communityList:Array<MainListType|any>})=>{
    return(
        <View>
            <FlatList 
                keyExtractor={(item,index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                data={[{id:"category"},{id:"postList"},{id:"notice"},{id:"realTimeIssue"},...communityList]}
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
                            //    {/* 게시판 */}
                                <CommunityPost />
                            )
                        case 2:
                            return(
                                <CommunityNotice />
                            )
                        case 3:
                            return (
                                // {/* 실시간 이슈 TOP! */}
                                <View>
                                    <View style={{justifyContent:"center",marginLeft:17,height:40}}>
                                        <Text>실시간 이슈 TOP!</Text>
                                    </View>
                                    {
                                        communityList.map((item,index)=>{
                                            if(index>1){
                                                return null
                                            }
                                            return(
                                                <CardComponent key={index} item={item}/>
                                            )
                                        })
                                    }
                                    <Text style={{alignSelf:"center",marginVertical:10}}>더보기</Text>
                                </View>
                            )
                        default:
                            {/* 리스트 뷰 ! */}
                            return (
                                <CardComponent key={index} item={item}/>
                            )
                        break;

                    }
                
                }}
                onEndReached={(page)=>{

                }}
                onEndReachedThreshold={1}
            />
        </View>
    )
}