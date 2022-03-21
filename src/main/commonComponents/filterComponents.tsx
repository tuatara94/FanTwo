import React from "react"
import { View, Text, Image } from "react-native"
import { Dropdown } from "../../utills/DropDownMenu"
import { RowView } from "../../utills/StyledViews"


export const MainFilter=()=>{

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
}