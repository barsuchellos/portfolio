import Theme from "../../common/theme/Theme.tsx";
import SkillContainer from "../../common/skill-container/SkillContainer.tsx";
import {newSkills, otherSkills, skills} from "../../../lib/main/constants.ts";
import './index.scss'
import {useContext} from "react";
import {LanguageContext} from "../../../context/context.ts";
const Skills = () => {
    const {language, isLang} = useContext(LanguageContext)

    return (
        <section className='skills' id='skills'>
            <Theme title={`${language[isLang].main.skill.title}`} />
            <SkillContainer   title={`${language[isLang].main.skill.subtitle.useNow}`} data={skills}/>
            <SkillContainer   title={`${language[isLang].main.skill.subtitle.learn}`} data={newSkills}/>
            <SkillContainer   title={`${language[isLang].main.skill.subtitle.other}`} data={otherSkills}/>
        </section>
    );
};

export default Skills;
