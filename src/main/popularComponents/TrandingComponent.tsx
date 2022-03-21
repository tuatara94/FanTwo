import React from "react"
import { View, Text, FlatList, TouchableWithoutFeedback, Image } from "react-native"
import { RowView } from "../../utills/StyledViews"


export const TrandingView =({item,onClick}:{item:Array<any>,onClick:Function})=>{

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