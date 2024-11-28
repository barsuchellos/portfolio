import './index.scss'
import {FC} from "react";
import SkillLogo from "../skill-logo/SkillLogo.tsx";
import {ISkill} from "../../../lib/main/constants.ts";
import {ISkillContainer} from "../../../types/components/main/main.ts";


const SkillContainer:FC<ISkillContainer> = ({title, data}) => {
    return (
        <div className='skills__container'>
            <p className='skills__description'>{title}</p>
            <div className='skills__container-logo'>
                {data.map((el:ISkill) => <SkillLogo {...el}/>)}
            </div>
        </div>
    );
};

export default SkillContainer;
