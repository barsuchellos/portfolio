import {LanguageContextType} from "../types/context-types.ts";
import {createContext} from "react";


export const LanguageContext = createContext<LanguageContextType | null>(null);
