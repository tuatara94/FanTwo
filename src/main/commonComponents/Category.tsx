import { observer } from "mobx-react";
import React from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native";
import { useStore } from "../../store/Context";
import { baseHeight } from "../../utills/Values";

const TouchText =({index,text,touchCallback,selectIndex}:{index:number,text:string,touchCallback:Function,selectIndex:number})=>{
    return(
        <TouchableWithoutFeedback onPress={()=>{
            touchCallback(index)
            }}>
            <Text style={{fontWeight:selectIndex==index? "bold":"400" 
                        ,color:selectIndex==index? "black":"gray"}}>{text}</Text>
        </TouchableWithoutFeedback >
    )
}

export const MainCategory=observer(()=>{
    const topCategory=["Home","Popular","Community","Club","Stories"];
    const {maincategoryStore}=useStore();
    return (
        <View style={{flexDirection:"row",height:baseHeight*39,alignItems:"center",justifyContent:"space-around"}}>
            {topCategory.map((item,index)=>{
                return(
                    <TouchText
                        index={index} 
                        text={item}
                        key={index}
                        touchCallback={(index:number)=>{maincategoryStore.setMainCategoryIndex(index)}}
                        selectIndex={maincategoryStore.mainCategoryIndex}
                        />
                )
            })}
        </View>
    )
})