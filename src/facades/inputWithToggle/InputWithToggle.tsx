import React from 'react';
import style from './InputWithToggle.module.scss'
import {Field} from 'react-final-form';
import s from "../../assets/fcades/FcadeStyles.module.scss";
import {Switch} from "antd";

type PropsType = {
    label: string
    name: string
    value: boolean
    setValue: (value: boolean) => void
}

const InputWithToggle = ({label, name, value, setValue}: PropsType) =>
    <div className={style.inputWithToggle}>
        <label style={{color: value ? '#313131' : 'grey'}}>{label}</label>
        <Field name={name} disabled={value} component="input"/>
        <Switch defaultChecked className={style.switcher} onChange={(disable) => setValue(!disable)}/>
        {value && <span>Немає по батькові згідно документів</span>}
    </div>

export default InputWithToggle;
