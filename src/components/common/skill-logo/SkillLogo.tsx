import './index.scss'
import { useInView } from "react-intersection-observer";
import {FC} from "react";
import {ISkillLogoProps} from "../../../types/components/main/main.ts";


const SkillLogo:FC<ISkillLogoProps> = ({ image, text }) => {
    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    return (
        <div className='skill-logo'>
            <img loading={'lazy'}
                ref={(node) => {
                    if (node) imageRef(node);
                }}
                className={`skill-logo__image ${imageInView ? 'animation__image' : ''}`}
                src={image as string}
                alt="skill-image"
            />
            <p
                ref={(node) => {
                    if (node) textRef(node);
                }}
                className={`skill-logo__title ${textInView ? 'animation__title' : ''}`}
            >
                {text}
            </p>
        </div>
    );
};

export default SkillLogo;
