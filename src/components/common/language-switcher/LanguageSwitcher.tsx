import './index.scss'
import {useContext, useEffect} from "react";
import {LanguageContext} from "../../../context/context.ts";
const LanguageSwitcher = () => {
    const {changeLanguage} = useContext(LanguageContext)

    useEffect(()=>{
        const savedStateLanguage = localStorage.getItem('language')
        if(savedStateLanguage) {
            changeLanguage(savedStateLanguage)
        }
    },[])

    const handleLanguageChange = (newLanguage:string) => {
        changeLanguage(newLanguage)
        localStorage.setItem('language', newLanguage);
    }

    return (
        <div className='switcher'>
            <button className='switcher__button' onClick={()=> handleLanguageChange('en')}>En</button>
            /
            <button className='switcher__button' onClick={()=> handleLanguageChange('ua')}>Ua</button>
        </div>
    );
};

export default LanguageSwitcher;
