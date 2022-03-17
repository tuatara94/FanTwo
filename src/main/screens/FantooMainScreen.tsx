import { observer } from "mobx-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { useStore } from "../../store/Context";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { MainListType } from "../../utills/Types";
import { baseHeight, DisplayWdith } from "../../utills/Values";
import { HomeComponent } from "../categorycomponents.tsx/HomeComponent";
import { PopularComponent } from "../categorycomponents.tsx/PopularComponent";
import { MainBanner } from "../maincomponents/MainBannerComponent";
import { ThumbnailPostComponent } from "../maincomponents/PostComponents";

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

export const FantooMainScreen=observer(()=>{
    const {maincategoryStore}=useStore();
   
    const [photoPageNum,setPhotoPageNum]=useState({
        start:0,
        limit:20,
    });
    const getPostItem =()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?_start=${photoPageNum.start}&_limit=${photoPageNum.limit}`)
        .then(result=>result.json())
        .then(response=>{
            const tempArray: Array<MainListType|any> =[];
            for(let a=0; a<response.length;a++){
                const tempItem : MainListType={
                    id: response[a].id.toString(),
                    title: "타이틀" + Math.random().toFixed(2),
                    text: response[a].title,
                    athour: response[a].id,
                    createDate: new Date().getMilliseconds().toString(),
                    categoryName: "(I_U)",
                    thumbnailUrl: response[a].thumbnailUrl,
                    photoUrl: response[a].url,
                    likeCnt: (Math.random() * 20).toFixed(0) + "",
                    commentCnt: "" + (Math.random() * 80).toFixed(0),
                    honerCnt: "" + (Math.random() * 10).toFixed(0),
                    isBadge: false,
                    isJoin: false,
                    isMyLike: false
                }
                tempArray.push(tempItem)
            }
            maincategoryStore.setMainListItemArrays([...maincategoryStore.mainListItemArrays,...tempArray])
            setPhotoPageNum(prev =>{return({start:prev.start+20,limit:20})})    
        })
        .catch(error=>{
            console.log("error")
            console.log(error)
        })
       

    }
    useEffect(()=>{
        getPostItem();
    },[])
    return (
            <View style={{flex:1,backgroundColor:"white"}}>
                {maincategoryStore.mainCategoryIndex==0? 
                    // {/* HomeComponenet */}
                <HomeComponent homeListItems={maincategoryStore.mainListItemArrays} />
                :maincategoryStore.mainCategoryIndex==1?
                <PopularComponent popularListItems={maincategoryStore.mainListItemArrays} />
                :<View>
                    <MainCategory />
                    <Text>Popular</Text>
                </View>
                }
                
            </View>
        

    )

})