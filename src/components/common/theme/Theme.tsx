import { FC } from 'react';
import './index.scss'
import {useInView} from "react-intersection-observer";
import {ITheme} from "../../../types/components/main/main.ts";



const Theme:FC<ITheme> = ({title , id}) => {
    const {ref, inView} = useInView(
        {
            threshold: 0.5,
            triggerOnce:true,
        }
    )
    return (
        <h2 ref={ref} className={`title ${inView ? 'animation' : ''}`} id={id}>
            {title}
        </h2>
    );
};

export default Theme;
