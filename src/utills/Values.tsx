import React from "react";
import { Dimensions } from "react-native";

export const DisplayWdith=Dimensions.get("screen").width;
export const DisplayHeight=Dimensions.get("screen").height;

//디바이스에 맞게 비율 조정 
export const basicDimensions = { 
    // 디자이너가 작업하고 있는 XD파일 스크린의 세로,가로
    // Zeplin 이나 XD(이건 뭐지?) 로 확인하면서 변경
    height: 740,
    width: 390,
};

// 높이 변환 작업
export const baseHeight = 1
        // (DisplayHeight * (1 / basicDimensions.height)).toFixed(2);
// 가로 변환 작업
export const baseWidth = 1
        // (DisplayWdith * (1 / basicDimensions.width)).toFixed(2);