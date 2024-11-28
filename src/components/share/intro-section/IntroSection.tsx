import separatorWhite from "../../../assets/images/main/separatorWhite.svg";
import gmailLogo from "../../../assets/images/main/gmail-logo.svg";
import linkedinLogo from "../../../assets/images/main/linkedin-logo.svg";
import githubLogo from "../../../assets/images/main/github-logo.svg";
import './index.scss'
import {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../../context/context.ts";
import {imagesContainer} from "./background-images.ts";

const IntroSection = () => {
    const {language, isLang} = useContext(LanguageContext)
    const [counterImage, setCounterImage] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterImage((prevState) => (prevState + 1) % imagesContainer.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='section' style={{backgroundImage: `url(${imagesContainer[counterImage]})`}}>
            <h2 className='section__name'>{language[isLang].main.intro.name}</h2>
            <h1 className='section__job'>{language[isLang].main.intro.job}</h1>
            <img className='section__separator' src={`${separatorWhite}`} alt="separatorWhite" />
            <div className='section__link-container'>
                <a href="mailto:borsukbohdan01@gmail.com?subject=Запитання&body=Доброго дня, ..." target="_blank" rel="noreferrer noopener">
                    <img className='section__link' src={`${gmailLogo}`} alt="Linkedin" />
                </a>
                <a href="https://www.linkedin.com/in/bohdan-borsuk/" target="_blank" rel="noreferrer noopener">
                    <img className='section__link' src={`${linkedinLogo}`} alt="Gmail" />
                </a>
                <a href="https://github.com/barsuchellos" target="_blank" rel="noreferrer noopener">
                    <img className='section__link' src={`${githubLogo}`} alt="Github" />
                </a>
            </div>
        </section>
    );
};

export default IntroSection;
