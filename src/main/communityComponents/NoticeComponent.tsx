import React from "react"
import { View, Text } from "react-native"
import { RowView } from "../../utills/StyledViews"


export const CommunityNotice=()=>{

    const noticeItems =["첫번째 공지 this is first Notice! 최대 1줄까지만 가능 넘으면 ...넘으면 ...넘으면 ...",
    "넘으면 ... 처리 할것 두번째 공지 "];

    return(
        <View style={{marginTop:3}}>
            {noticeItems.map((item,index)=>{
                return(
                    <RowView key={index} style={{margin:2,backgroundColor:"#f2f2f2",alignItems:"center"}}>
                        <Text style={{paddingHorizontal:3,marginVertical:3,marginHorizontal:5,backgroundColor:"white",borderRadius:2,borderColor:"black",borderWidth:1,fontSize:11}}>공지</Text>
                        <Text style={{fontSize:13,flex:1}} ellipsizeMode={"tail"} numberOfLines={1} >{item}</Text>
                    </RowView>
                )
            })}
        </View>
    )

}