import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { DisplayWdith, baseHeight } from "./Values";


interface ButtonStyleType {
    bgColor? : string,
    btnRadius? : number,
    btnWidth? : number,
    btnHeight? : number,
    marginTop? :number,
    marginBottom? :number,
    marginRight? :number,
    marginLeft? :number,
    btnPadding?:number,
    paddingBottom?:number,
    paddingTop?:number,
    paddingRight?:number,
    paddingLeft?:number,
    btnMargin? :number,
    borderColor?:string,
    borderWidth?:number
}

interface ButtonPropType{
    bgColor?:string,
    text:string,
    btnWidth?:number,
    btnHeight?:number,
    btnRadius?:number,
    textColor?:string,
    padding?:number,
    paddingTop? :number,
    paddingBottom? :number,
    paddingRight? :number,
    paddingLeft? :number,
    marginTop? :number,
    marginBottom? :number,
    marginRight? :number,
    marginLeft? :number,
    margin? :number,
    borderColor?:string,
    borderWidth?:number,
    disable? :boolean,
    onPress : ((event: GestureResponderEvent) => void)
}

const TouchButton=styled.TouchableOpacity<ButtonStyleType>`
  width  : ${({btnWidth})=>{return (btnWidth? btnWidth+"px":"null")}};
  height: ${({btnHeight})=>{return (btnHeight?btnHeight+"px": "null")}};
  background-color: ${(props)=>{ return (props.bgColor? props.bgColor:"#1e98d7")}};
  align-items: center;
  justify-content: center;
  border-radius: ${({btnRadius})=>{return (btnRadius? btnRadius+"px":"8px")}};
  border-color: ${({borderColor})=> {return (borderColor? borderColor : "null")}};
  border-width: ${({borderWidth})=> {return (borderWidth? borderWidth+"px":"null")}};
  margin-top : ${({marginTop})=>{return (marginTop? marginTop+"px":"null")}};
  margin-bottom : ${({marginBottom})=>{return (marginBottom? marginBottom+"px":"null")}};
  margin-right : ${({marginRight})=>{return (marginRight? marginRight+"px":"null")}};
  margin-left : ${({marginLeft})=>{return (marginLeft? marginLeft+"px":"null")}};
  margin: ${(props)=>{return (
      props.btnMargin?
       (props.marginBottom||props.marginTop||props.marginLeft||props.marginRight)? 
       `${props.marginTop? props.marginTop+"px":props.btnMargin+"px"} ${props.marginRight? props.marginRight+"px":props.btnMargin+"px"} ${props.marginBottom? props.marginBottom+"px":props.btnMargin+"px"} ${props.marginLeft? props.marginLeft+"px":props.btnMargin+"px"}`
       :props.btnMargin+"px"
       :(props.marginBottom||props.marginTop||props.marginLeft||props.marginRight)? 
       `${props.marginTop? props.marginTop+"px":"18px"} ${props.marginRight? props.marginRight+"px":"18px"} ${props.marginBottom? props.marginBottom+"px":"18px"} ${props.marginLeft? props.marginLeft+"px":"18px"}`
       :"18px"
      )}};
  padding: ${(props)=>{return (
        props.btnPadding?
        (props.paddingBottom||props.paddingTop||props.paddingLeft||props.paddingRight)? 
        `${props.paddingTop? props.paddingTop+"px":props.btnPadding+"px"} ${props.paddingRight? props.paddingRight+"px":props.btnPadding+"px"} ${props.paddingBottom? props.paddingBottom+"px":props.btnPadding+"px"} ${props.paddingLeft? props.paddingLeft+"px":props.btnPadding+"px"}`
        :props.btnPadding+"px"
        :(props.paddingBottom||props.paddingTop||props.paddingLeft||props.paddingRight)? 
        `${props.paddingTop? props.paddingTop+"px":"10px"} ${props.paddingRight? props.paddingRight+"px":"10px"} ${props.paddingBottom? props.paddingBottom+"px":"10px"} ${props.paddingLeft? props.paddingLeft+"px":"10px"}`
        :"10px"
        )}};

`;
//  style={{width:DisplayWdith-50, height:baseHeight*40, 
// backgroundColor:"#1e98d7",alignItems:"center"
// ,justifyContent:"center",borderRadius:8,padding:2,margin:18}}
export const OpacityRadius8Button=
        (propsItem:ButtonPropType)=>{
    const btnDisableColor = propsItem.disable? "#d8d8d8":null;
    return (
        <TouchButton 
            bgColor={btnDisableColor? btnDisableColor:propsItem.bgColor}
            btnWidth={propsItem.btnWidth} 
            btnHeight={propsItem.btnHeight} 
            btnRadius={propsItem.btnRadius}
            btnPadding={propsItem.padding}
            btnMargin={propsItem.margin}
            marginBottom={propsItem.marginBottom}
            marginTop={propsItem.marginTop}
            marginRight={propsItem.marginRight}
            marginLeft={propsItem.marginLeft}
            paddingBottom={propsItem.paddingBottom}
            paddingTop={propsItem.paddingTop}
            paddingRight={propsItem.paddingRight}
            paddingLeft={propsItem.paddingLeft}
            borderColor={propsItem.borderColor}
            borderWidth={propsItem.borderWidth}
            disabled={propsItem.disable}
            onPress={propsItem.onPress}
            >
            <View>
                <Text style={{color:propsItem.textColor? propsItem.textColor:"white"
                            ,fontSize : 13
                            }}>{propsItem.text}</Text>
            </View>
        </TouchButton>
    )

}