import { observer } from "mobx-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { useStore } from "../../store/Context";
import { OpacityRadius8Button } from "../../utills/Buttons";
import { MainListType } from "../../utills/Types";
import { baseHeight, DisplayWdith } from "../../utills/Values";
import { CommintyComponent } from "../categoryList/CommunityComponent";
import { HomeComponent } from "../categoryList/HomeComponent";
import { PopularComponent } from "../categoryList/PopularComponent";
import { MainCategory } from "../commonComponents/Category";
import { ThumbnailPostComponent } from "../mainComponents/PostComponents";

export const FantooMainScreen=observer(()=>{
    const {maincategoryStore}=useStore();
   
    const [photoPageNum,setPhotoPageNum]=useState({
        start:0,
        limit:20,
    });
    // const body = { 
    //     "client_id":"c39b637f8fd111ec8428e73e37da3a03",
    //     "lang":"ko",
    //     "response_type":"code",
    //     "service_name":"fantoo",
    //     "service_sort":"fantoo_sns",
    //     "sns_sort":"guugle",
    //     "sns_uid":"agsdgsdg_uid"
    // }
    // let query = Object.keys(body).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(body[k])).join('&');

    const getPostItem =()=>{
        // fetch("http://193.122.104.29:8121/ft_auth/get_a1_AuthCode?"+query,
        //     {
        //         method:"POST",
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //     }
        // ).then(restult => restult.json())
        // .then(res => {
        //     console.log("res")
        //     console.log(res)
        // })
        // .catch(err => {
        //     console.log("err")
        //     console.log(err)
        // })


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
                :maincategoryStore.mainCategoryIndex==2?
                <CommintyComponent communityList={maincategoryStore.mainListItemArrays}/>
                :<View>
                    <MainCategory />
                    <Text>Popular</Text>
                </View>
                }
                
            </View>
        

    )

})