import React, {MutableRefObject, useContext, useRef, useState} from 'react';
import FormInput from "../form-input/FormInput";
import FormTextArea from "../form-text-area/FormTextArea";
import FormButton from "../form-button/FormButton";
import {LanguageContext} from "../../../context/context";
import emailjs from '@emailjs/browser';
import './index.scss';
import {useFormik} from "formik";
import * as Yup from 'yup';
import Loader from "../loader/Loader.tsx";

const FormContactMe = () => {
    const formRef:MutableRefObject<HTMLFormElement | null> = useRef<HTMLFormElement | null>(null);
    const {language, isLang} = useContext(LanguageContext);
    const [isLoading, setLoading] =  useState<boolean>(false)

    const SignupSchema = Yup.object().shape({
        from_name: Yup.string().required('Name is required'),
        from_email: Yup.string().email('Invalid email').required('Email is required'),
        from_number: Yup.string().matches(/^\d+$/, 'Only numbers are allowed'),
    });

    const formik = useFormik({
        initialValues: {
            from_name: '',
            from_email: '',
            from_number: '',
            message: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values, {resetForm}) => {
            setLoading(true)
            if (formRef.current) {
                emailjs.sendForm(
                    'service_nxyj6ur',
                    'template_1egrbo7',
                    formRef.current,
                    '-LFg61cWbMVsgxkv7'
                ).then(
                    () => {
                        console.log('SUCCESS!');
                        setLoading(false)
                        resetForm();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setLoading(false);
                    }
                );
            }
        }
    });

    return (
        <form ref={formRef} onSubmit={formik.handleSubmit} className='form'>
            <FormInput
                id="name"
                type="text"
                name="from_name"
                placeholder={language[isLang].main.contactMe.form.placeholderName}
                value={formik.values.from_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.from_name && formik.errors.from_name ? (
                <div className="error">{formik.errors.from_name}</div>
            ) : null}

            <FormInput
                id="email"
                type="email"
                name="from_email"
                placeholder={language[isLang].main.contactMe.form.placeholderEmail}
                value={formik.values.from_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.from_email && formik.errors.from_email ? (
                <div className="error">{formik.errors.from_email}</div>
            ) : null}

            <FormInput
                id="number"
                type="text"
                name="from_number"
                placeholder={language[isLang].main.contactMe.form.placeholderNumber}
                value={formik.values.from_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.from_number && formik.errors.from_number ? (
                <div className="error">{formik.errors.from_number}</div>
            ) : null}

            <FormTextArea
                name="message"
                placeholder={language[isLang].main.contactMe.form.placeholderMessage}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
            ) : null}
            <FormButton type="submit"/>
            {isLoading ? <Loader/> : null}
        </form>
    );
};

export default FormContactMe;
