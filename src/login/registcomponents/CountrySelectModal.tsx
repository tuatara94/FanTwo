import React, { useEffect, useState } from "react";
import { Modal, SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, FlatList, RecyclerViewBackedScrollView, Button } from "react-native";
import { useStore } from "../../store/Context";
import { DisplayWdith, baseHeight } from "../../utills/Values";

const CountryRenderModal=({index,item,select,setSelect}:any)=>{
    const {registSelectCountry}=useStore();
    const check = index ==select
    return(
        <TouchableOpacity onPress={()=>{
            registSelectCountry.setSelectCountry(item.name);
            setSelect(index)
        }}>
            <View style={{flexDirection:"row",height:40,alignItems:"center",marginLeft:40}}>
                <Text>{item.name +" ("+item.codeNum+")"}</Text>
                <Text>{check? "선택":""}</Text>
            </View>

        </TouchableOpacity>
    )
}


export  const CountryModal =({visible,setVisible}:any)=>{
    const [selectCountryIndex,setSelectCountryIndex]=useState(0);
    const [searchWord,setSearchWord]=useState("");
    const [countryList2,setCountryList2]:[Array<{"index":number,"name":string,"codeText":string,"codeNum":number}>,any]=useState([]);
    const [originalList,setOriginalList]:[Array<{"index":number,"name":string,"codeText":string,"codeNum":number}>,any]=useState([]);
   //초기 국가 정보 
    useEffect(()=>{
        const countryList :Array<{"index":number,"name":string,"codeText":string,"codeNum":number}> =[
            {
                "index":0,
                "name":"대한민국",
                "codeText":"kr",
                "codeNum":82
            },
            
        ]
        for(var a =1 ; a<170;a++){
            const temp = {
                "index":a,
                "name":"대한민국"+a,
                "codeText":"kr",
                "codeNum":82
            };
            countryList.push(temp);
        }
        setCountryList2(countryList);
        setOriginalList(countryList);
    },[])

    return(
        <Modal 
            animationType="slide"
            transparent={true}
            visible={visible}
            statusBarTranslucent={true}
            onRequestClose={()=>{}}
            >
                <SafeAreaView  style={{flex:1}}>
                    <View style={{flex:1,backgroundColor:"white"}}>
                        <View style={{flexDirection:"row",paddingLeft:30,paddingTop:30}}>
                            <TouchableOpacity onPress={()=>{setVisible(false)}}>
                                <Image source={require("../../../images/language_logo.png")} 
                                    style={{width: 20 ,height:20}} />
                            </TouchableOpacity>
                            <Text style={{fontSize:15,marginLeft:10,color:"black"}}>국가 검색</Text>
                        </View>
                        <View style={{width:DisplayWdith,marginTop:20,height:0.5,backgroundColor:"#797979",opacity:0.3}} />
                        <View>
                            <TextInput 
                                value={searchWord}
                                onChangeText={(text)=>{setSearchWord(text)}}
                                style={{alignSelf:"center" ,width:DisplayWdith-40,height:baseHeight*40,backgroundColor:"white"
                                ,borderWidth:1,borderRadius:8,borderColor:"gray",marginTop:10}}
                                placeholder="국가를 검색하세요."
                                />
                            <Button title="검색" onPress={()=>{
                                setCountryList2(originalList.filter(it=>it.name.includes(searchWord)))
                            }}/>
                        </View>


                        <FlatList 
                            keyExtractor={(itme,index)=>index.toString()}
                            data={countryList2}
                            renderItem={({item,index})=>{
                            return(
                                <CountryRenderModal index={index} item={item} select={selectCountryIndex} setSelect={setSelectCountryIndex} />
                            )

                            }}
                            extraData={selectCountryIndex}
                        
                        />
                    </View>
                </SafeAreaView>
            </Modal>

    )

}
