import { observer } from "mobx-react";
import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components/native";
import { useStore } from "../store/Context";
import { baseHeight, DisplayWdith } from "./Values";

export const TopText = styled.Text`
    margin-top  : 40px;
    margin-left: 27px;
    font-size: 18px;
    color: #333333;
    align-self: flex-start;
`;
export const InputIDPASS=styled.TextInput`
    width: ${DisplayWdith-50}px;
    height: ${baseHeight*40}px;
    margin-top: 18px;
    background-color: #f2f2f2;
    border-radius: 8px;
    border-width: 1px;
    border-color: #797979;
    text-align: center;
`;

export const Tooltip=styled.Text`
      color: #7f7f7f;
      font-size: 11px;
      align-self: flex-start;
      margin-top: 5px;
      margin-left: 25px;

`;
export const WaringText=styled.Text`
    align-self  : flex-start;
    margin-left: 25px;
    color:  red;
    font-size: 12px;
`;

export const OkText=styled.Text`
    color:#1e98d7;
    font-size : 13px;
    height: ${baseHeight*40}px ;
    margin-top: 18px;
    margin-left: 10px;
    padding-top: 10px;
    text-align: center;
    position: absolute;
`;
