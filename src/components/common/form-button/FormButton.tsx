import './index.scss'
import {FC, useContext} from "react";
import {LanguageContext} from "../../../context/context.ts";
import {IFormButton} from "../../../types/components/main/main.ts";



const FormButton:FC<IFormButton> = ({type}) => {
    const context = useContext(LanguageContext)
    const buttonText = context
        ? context.language[context.isLang]?.main?.contactMe?.form?.buttonName
        : "Default Button";

    return (
        <button type={type} className='form-button'>
            {buttonText}
        </button>
    );
};

export default FormButton;
