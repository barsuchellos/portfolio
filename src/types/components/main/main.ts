import React from "react";
import {ISkill} from "../../../lib/main/constants.ts";

export interface IAboutSection {
    title: string;
    description: string;
}

export interface ISkillSection {
    title: string;
    subtitle: {
        useNow: string;
        learn: string;
        other: string;
    };
}

export interface IContactMeSection {
    title: string;
    description: string;
    form: {
        placeholderName: string;
        placeholderEmail: string;
        placeholderNumber: string;
        placeholderMessage: string;
        buttonName: string;
    };
}

export interface TIntroduction {
    name:string,
    job:string,
}

export interface IProjects {
    name: string,
    description: string,
    liveDemo: string,
    gitHub:string
    background: string | object,
    key?:string
}
export  interface IPortfolio {
    title:string
    projects: IProjects[]
}

export interface IMain {
    intro: TIntroduction;
    about: IAboutSection;
    skill: ISkillSection;
    portfolio: IPortfolio;
    contactMe: IContactMeSection;
}


export interface IFormButton {
    type: "submit" | "reset" | "button" | undefined
}

export interface FormInputProps {
    placeholder: string;
    type: string;
    name: string;
    id?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface FormTextAreaProps {
    placeholder: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}


export interface ISkillContainer {
    title: string,
    data: ISkill[]
}

export interface ISkillLogoProps {
    image: string | object,
    text: string,
}

export interface ITheme {
    title:string,
    id?:string
}
