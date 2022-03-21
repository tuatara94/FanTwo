import React, { useMemo } from "react";
import { View, FlatList, Text, Image } from "react-native";
import { Dropdown } from "../../utills/DropDownMenu";
import { RowView } from "../../utills/StyledViews";
import { MainListType } from "../../utills/Types";
import { MainCategory } from "../commonComponents/Category";
import { MainFilter } from "../commonComponents/filterComponents";
import { MainBanner } from "../mainComponents/MainBannerComponent";
import { ThumbnailPostComponent } from "../mainComponents/PostComponents";



export const HomeComponent=({homeListItems}:{homeListItems:Array<MainListType|any>})=>{

    return(
        <View>
            <FlatList 
                keyExtractor={(item,index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                data={[{id:"category"},{id:"banner"},{id:"fillter"},...homeListItems]}
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
                            //    {/* 배너 */}
                                <MainBanner />
                            )
                        case 2:
                            return(
                                // 필터
                                <MainFilter />
                            )
                        default:
                            {/* 리스트 뷰 ! */}
                            // if(index>10){
                            //    return null
                            // }
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
        </View>
    )

}