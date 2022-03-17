import React from "react";

export interface PermissionType{
    title :string,
    text : string
}

export interface MainListType {
    "id":string,
    "title":string,
    "text":string,
    "athour":string,
    "createDate":string,
    "categoryName":string,
    "thumbnailUrl":string,
    "photoUrl":string,
    "likeCnt" : string,
    "commentCnt" :string,
    "honerCnt" :string,
    "isBadge" : boolean,
    "isJoin" :boolean,
    "isMyLike" :boolean
}

export interface DropDownTouchBtnType {
    dropDownPosition :{
        posX:number,
        posY:number
    },
    width :number,

}