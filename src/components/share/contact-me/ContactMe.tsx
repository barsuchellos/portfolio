import Theme from "../../common/theme/Theme.tsx";
import FormContactMe from "../../common/form-contact-me/FormContactMe.tsx";
import './index.scss'
import Sign from "../../common/sign/Sign.tsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/context.ts";
const ContactMe = () => {
    const {language, isLang} = useContext(LanguageContext)

    return (
        <section className='contact' id='contactMe'>
            <Theme title={`${language[isLang].main.contactMe.title ?? 'none'}` } id='hz'/>
            <p className='contact__description'>{language[isLang].main.contactMe.description}</p>
            <Sign/>
            <FormContactMe/>
        </section>
    );
};

export default ContactMe;
