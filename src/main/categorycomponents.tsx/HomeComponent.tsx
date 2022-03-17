import React, { useMemo } from "react";
import { View, FlatList, Text, Image } from "react-native";
import { Dropdown } from "../../utills/DropDownMenu";
import { RowView } from "../../utills/StyledViews";
import { MainListType } from "../../utills/Types";
import { MainBanner } from "../maincomponents/MainBannerComponent";
import { ThumbnailPostComponent } from "../maincomponents/PostComponents";
import { MainCategory } from "../screens/FantooMainScreen";



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
        </View>
    )

}