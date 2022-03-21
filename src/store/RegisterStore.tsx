import { RootStore } from "./RootStore";
import { action,makeObservable,observable } from "mobx";


export class SendEmailInfo{
    emailOfSendCode :string ="";
    rootStore;

    constructor(root :RootStore){
        makeObservable(this,{
            emailOfSendCode :observable,
            settingEmail : action
        })
        this.rootStore=root
    }

    settingEmail(email:string){
        this.emailOfSendCode=email;
    }

}

export class RegistCountryInfo {
    selectCountry:string="";
    rootStore;

    constructor(root :RootStore){
        makeObservable(this,{
            selectCountry:observable,
            setSelectCountry:action
        })

        this.rootStore=root;
    }

    setSelectCountry(selectCountry:string){
        this.selectCountry=selectCountry;
    }


}