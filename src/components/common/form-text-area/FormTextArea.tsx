import './index.scss'
import React, {FC} from "react";
import {useInView} from "react-intersection-observer";
import {FormTextAreaProps} from "../../../types/components/main/main.ts";
const FormTextArea:FC<FormTextAreaProps> = ({placeholder, name, onChange, onBlur, value}) => {
    const {ref, inView} = useInView(
        {
            threshold: 0.4,
            triggerOnce: true,
        }
    )

    return (
        <textarea
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            name={name}
            className={`form-text-area ${inView ? 'animation' : ''}`}
            placeholder={placeholder}
            ref={ref}
        ></textarea>
    );
};

export default FormTextArea;
