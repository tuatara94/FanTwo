import { action, makeObservable, observable } from "mobx";
import React from "react";
import { MainListType } from "../utills/Types";
import { RootStore } from "./RootStore";

export class MainCategoryStore{
    mainCategoryIndex=0;
    mainListItemArrays:Array<MainListType|any>= [] ;
    root;

    constructor(rootstore: RootStore){
        makeObservable(this,{
            mainCategoryIndex : observable,
            mainListItemArrays : observable,
            setMainCategoryIndex : action,
            setMainListItemArrays : action
        })

        this.root=rootstore;
    }

    setMainCategoryIndex(mainCategoryIndex:number){
        this.mainCategoryIndex=mainCategoryIndex
    }

    setMainListItemArrays(mainListItemArrays:Array<MainListType|any>){
        this.mainListItemArrays=mainListItemArrays;
    }

}
