import './index.scss'
import React, {FC} from "react";
import {useInView} from "react-intersection-observer";
import {FormInputProps} from "../../../types/components/main/main.ts";



const FormInput: FC<FormInputProps> = ({placeholder, type, name, id, value, onChange, onBlur}) => {
    const {ref, inView} = useInView(
        {
            threshold: 0.4,
            triggerOnce: true,
        }
    )
    return (
        <input
            ref={ref}
            onChange={onChange}
            id={id}
            value={value}
            type={type}
            name={name}
            className={`form-input ${inView ? 'animation' : ''}`}
            placeholder={placeholder}
            onBlur={onBlur}
        ></input>
    );
};

export default FormInput;
