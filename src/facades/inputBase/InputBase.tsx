import React from 'react';
import style from './InputBase.module.scss'
import {Field} from 'react-final-form';
import {InfoCircleOutlined} from "@ant-design/icons";
import errStyle from '../styles/ErrorStyle.module.scss';

type PropsType = {
    label: string
    name: string
    placeholder?: string
}

const InputBase = ({label, name, placeholder}: PropsType) =>
    <div className={style.inputBase}>
        <label>{label}</label>
        <Field
            name={name}
            value=""
            render={({input, meta}) => (
                <div className={style.fieldBody}>
                    <input {...input}
                           placeholder={placeholder}
                           style={{
                               height: placeholder && '60px',
                               borderColor: meta.touched && meta.error && 'red'
                           }}
                    />
                    {meta.touched && meta.error && <InfoCircleOutlined className={errStyle.errorIcon}/>}
                    {meta.touched && meta.error && <div className={errStyle.error}>{meta.error}</div>}
                </div>
            )}
        />
    </div>

export default InputBase;
