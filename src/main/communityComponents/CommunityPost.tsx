import React from "react"
import { View, Text } from "react-native"
import { RowView } from "../../utills/StyledViews"


export const CommunityPost=()=>{

    const postListItems=["HOT","공지사항","스퀘어","KPOP","K스타","K엔터"];

    return (
        //    {/* 게시판 */}
            <View style={{paddingHorizontal:17,marginTop:22}}>
                <RowView style={{justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={{fontSize:15}}>커뮤니티 게시판</Text>
                    <Text style={{fontSize:12}}>전체 보기</Text>
                </RowView>
                <RowView style={{flexWrap:"wrap",justifyContent:"center"}}>
                    {postListItems.map((item,index)=>{
                        return(
                            <View key={index} 
                                style={{width:"47%",margin:4,borderRadius:4,borderColor:"black",borderWidth:1,justifyContent:"center",padding:10}}>
                                <Text style={{fontSize:10}}>{item}</Text>
                            </View>
                        )
                    })}
                </RowView>
            </View>
        )

}
