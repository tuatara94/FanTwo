import React, { Component, FC, ReactElement, useRef, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Icon  from "react-native-vector-icons/FontAwesome";
import prettyFormat from 'pretty-format';
import styled from "styled-components/native";
import { DropDownTouchBtnType } from "./Types";
interface Props {
    data: Array<any>;
    onSelect: (item:any) => void;
    dropWidth:number;
    labelView: Function;
    alignDropDown:"center"|"left"|"right";
    itemRender:Function;
}

const DropdownTouchItem = styled.TouchableOpacity<DropDownTouchBtnType>`
    top:${({dropDownPosition})=>{return dropDownPosition.posY+"px"}};
    left:${({dropDownPosition})=>{return dropDownPosition.posX+"px"}};
    width:${({width})=>{return width+"px"}};
`;

export const Dropdown:FC<Props> =({data,onSelect,dropWidth,labelView,alignDropDown,itemRender})=>{
    const [visible, setVisible] = useState(false);
    let dropdownButton :any = useRef(null);
    const itemRenderRef :any =useRef(null);

    const [selected, setSelected] = useState(undefined);

    const [dropDownPosition,setDropDownPosition]=useState({
        posX:0,
        posY:0,
    })


    const toggleDropdown = (): void => {

        visible ? 
        setVisible(false)  : openDropDown();
      };
    const openDropDown=()=>{
        if(dropdownButton.current){
            dropdownButton.current.measure((x: any,y: any,w:  number,h: number,px:  number,py: number)=>{
                // console.log('*------dropdownButton---------* ')
                // console.log('X offset to frame: ' + w)
                // console.log('Y offset to frame: ' + h)
                // console.log('X offset to page: ' + px)
                // console.log('Y offset to page: ' + py)
                switch(alignDropDown){
                    case "center":
                        setDropDownPosition({posX:px-((100-w)/2),posY:py+h})
                        break;
                    case "left":
                        setDropDownPosition({posX:px,posY:py+h})
                        break;
                    case "right":
                        setDropDownPosition({posX:px-dropWidth+w,posY:py+h})
                        break;
                }
                setVisible(true);
            })
        }else{
            console.log(dropdownButton.current)
            setVisible(true);
        }

        
        
    }
      
    //개별 아이템
    const renderItem = ({ item }:any): ReactElement<any, any> => (
        <TouchableOpacity
            style={[styles.item,{width:dropWidth? dropWidth:40}]} 
            onPress={() => onItemPress(item)}>
            <Text style={styles.buttonText}> {item.title} </Text>
        </TouchableOpacity>
    );

    //아이템 선택시
    const onItemPress = (item: any): void => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };
// const DropdownTouchItem = styled.TouchableOpacity<DropDownTouchBtnType>`
// top:${({dropDownPosition})=>{return dropDownPosition.posY+"px"}};
// left:${({dropDownPosition})=>{return dropDownPosition.posX+"px"}};
// width:${({width})=>{return width+"px"}};
// `;
    //아이템 모음
    const renderDropdown = (): ReactElement<any, any> => {
        return (
        <Modal 
            visible={visible} 
            transparent 
            animationType="none" >
            <TouchableOpacity style={{flex:1}} onPress={()=>{toggleDropdown()}}>
                <View style={{top:dropDownPosition.posY,left:dropDownPosition.posX,width:100}}>
                    <View style={[styles.dropdown]}
                            >
                        {data.map((item,index)=>{
                            return (
                                <TouchableOpacity onPress={()=>{
                                    toggleDropdown()
                                    onSelect(item)
                                }}
                                    style={{width:dropWidth,alignItems:"center"}}
                                >
                                    {itemRender(item,index)}
                                </TouchableOpacity>
                                )
                        })}
                    </View>
                </View>
            </TouchableOpacity>
            
        </Modal>
        );
    };

    return (
        <>
            <TouchableOpacity
                ref={dropdownButton}
                onPress={(e)=>{
                    toggleDropdown();
                }}
            >
            {labelView()}
            {renderDropdown()}
            {/* <Icon name='chevron-down' color="white" /> */}
            </TouchableOpacity>
            
        </>
       
    );
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: '#FFFFFF',
        alignSelf:"center",
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        top: 0,
        borderColor:"#000000",
        borderWidth:1
      },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
     },
     button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 40,
        width : 150,
        paddingHorizontal: 10,
        zIndex: 2,
    },
    button1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        width: "45%",
        paddingHorizontal: 10,
        zIndex: 5,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        color :"black",
        backgroundColor:"tomato"
    },

})