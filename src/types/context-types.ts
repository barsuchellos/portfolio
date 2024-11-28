import {Dispatch, SetStateAction} from "react";
import {IHeader} from "./components/header/header.ts";
import {IMain} from "./components/main/main.ts";
import {IFooter} from "./components/footer/footer.ts";
export interface IContentLang {
    header: IHeader;
    main: IMain;
    footer: IFooter;
}
export interface ILang {
    ua: IContentLang;
    en: IContentLang;
}

 export type LanguageContextType = {
    isLang: string;
    changeLanguage: Dispatch<SetStateAction<string>>;
    language:ILang
};
