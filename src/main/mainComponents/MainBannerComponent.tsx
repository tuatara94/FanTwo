import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { DisplayWdith } from "../../utills/Values";

export const MainBanner =()=>{

    // 배너 정보
    const [bannerImageInfo,setBannerImageInfo] = useState(
        [
            {
              "_id": 26,
              "image": "http://kdg.fantoo.co.kr:5000/uploads_img/1645581814932.jpg",
              "url": "http://webview.fantoo.co.kr/fanit"
            },
            {
              "_id": 27,
              "image": "http://kdg.fantoo.co.kr:5000/uploads_img/1646023370193.jpg",
              "url": "http://webview.fantoo.co.kr/event/blankreplyevent"
            },
            {
              "_id": 20,
              "image": "http://kdg.fantoo.co.kr:5000/uploads_img/1642749179530.jpg",
              "url": "http://m.fantoo.co.kr/event/reviewevent_v3/"
            },
            {
              "_id": 12,
              "image": "http://kdg.fantoo.co.kr:5000/uploads_img/1644908182392.jpg",
              "url": "http://webview.fantoo.co.kr/contest/2021"
            },
            {
              "_id": 18,
              "image": "http://kdg.fantoo.co.kr:5000/uploads_img/1642145886339.jpg",
              "url": "http://m.fantoo.co.kr/event/singerevent1month/"
            },
            {
              "_id": 6,
              "image": "http://img.fantoo.co.kr/uploads/honor_1026.png",
              "url": "http://webview.fantoo.co.kr/event/honorevent"
            }
      ]
    )

    // 배너 height 측정
    const [imgHegith,setImgHeight]=useState(170);
  
    const scaleImageSize = async (url:string,originalWidth:number)=>{
        let heightValue=0;
        await Image.getSize(url,(width,height)=>{
            heightValue=originalWidth/width * height
        })
       
        return heightValue;
    }
    useEffect( ()=>{
        scaleImageSize("http://img.fantoo.co.kr/uploads/honor_1026.png",DisplayWdith)
        .then( (value)=> setImgHeight(value) )
    },[]);
    // 배너 선택 
    const clickToBanner=(linkUrl:string)=>{
      
    }

    // 배너 자동 슬라이더 
    let flatlistRef:any =useRef(null);
    useEffect(()=>{
        let page =0;
        let autoSlider= setInterval(()=>{
            if(flatlistRef.current!=null){
                flatlistRef.current.scrollToIndex({animate:true,index:page});
                page++;
            }else{

            }
        },5000);
        return ()=>{
            clearInterval(autoSlider);
        }
    },[flatlistRef])

    return(
        <View style={{flexDirection:"row"}}>
            <FlatList 
                keyExtractor={(item,index)=>item._id.toString()+index}
                data={bannerImageInfo}
                pagingEnabled={true}
                ref={flatlistRef}
                onScrollToIndexFailed={info=>{
                    //scrollToIndex 사용을 위해서는 onScrollToIndexFailed 함수 설정을 해야함
                    const wait = new Promise(resolve=>setTimeout(resolve,500));
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                automaticallyAdjustsScrollIndicatorInsets={true}
                renderItem={({item})=>{
                    return (
                      <TouchableWithoutFeedback onPress={()=>{clickToBanner(item.url)}}>
                        <Image source={{uri:item.image}} style={{width:DisplayWdith ,height:imgHegith }} resizeMode="contain" />
                      </TouchableWithoutFeedback>
                    )
                }}
                // 마지막 도달시 추가 
                onEndReached={()=>{
                    setBannerImageInfo(prev=>[...prev,...prev])
                }}
                onEndReachedThreshold={1}
                />
        </View>

    )

}