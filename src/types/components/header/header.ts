export interface IMobileHeaderLink {
    name: string,
    href:string
    key:string
}

export interface IHeaderNav {
    about: string;
    skills: string;
    portfolio: string;
    contactMe: string;
}

export interface IHeader {
    nav: IHeaderNav;
}


