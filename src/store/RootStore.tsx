import { MainCategoryStore } from "./MainStore";
import { RegistCountryInfo, SendEmailInfo } from "./RegisterStore";



export class RootStore {
    sendEmailInfo;
    registSelectCountry;
    maincategoryStore;

    constructor(){
        
        this.sendEmailInfo=new SendEmailInfo(this);
        this.registSelectCountry=new RegistCountryInfo(this);
        this.maincategoryStore=new MainCategoryStore(this);


    }

}