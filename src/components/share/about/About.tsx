import './index.scss'
import Theme from "../../common/theme/Theme.tsx";
import Sign from "../../common/sign/Sign.tsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/context.ts";
import {useInView} from "react-intersection-observer";

const About = () => {
    const {language, isLang} = useContext(LanguageContext);
    const {ref, inView} = useInView(
        {
            threshold: 0.5,
            triggerOnce: true,
        }
    )

    return (
        <section id='about' ref={ref} className={`about ${inView ? 'animation' : ''}`}>
            <Theme title={`${language[isLang].main.about.title}`} />
            <p className='about__description'>
                {language[isLang].main.about.description}
            </p>
            <Sign/>
        </section>
    );
};

export default About;
