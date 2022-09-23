import React from 'react';
import style from './InputBase.module.scss'
import {Field} from 'react-final-form';

type PropsType = {
    label: string
    name: string
    placeholder?: string
}

const InputBase = ({label, name, placeholder}: PropsType) =>
    <div className={style.inputBase}>
        <label>{label}</label>
        <Field name={name}
               component="input"
               value=""
               placeholder={placeholder}
               style={{height: placeholder && '60px'}}/>
    </div>

export default InputBase;
