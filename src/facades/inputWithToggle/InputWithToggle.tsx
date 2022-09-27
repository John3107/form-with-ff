import React from 'react';
import style from './InputWithToggle.module.scss'
import {Field} from 'react-final-form';
import {Switch} from "antd";
import errStyle from "../styles/ErrorStyle.module.scss";

type PropsType = {
    label: string
    name: string
    value: boolean
    setValue: (value: boolean) => void
    description: string
}

const InputWithToggle = ({label, name, value, setValue, description}: PropsType) =>
    <div className={style.inputWithToggle}>
        <label style={{color: value ? '#313131' : 'grey'}}>{label}</label>
        <Field
            name={name}
            render={({input, meta}) => (
                <div className={style.fieldBody}>
                    <input {...input}
                           disabled={value}
                           style={{
                               borderColor: meta.touched && meta.error && 'red'
                           }}/>
                    {meta.touched && meta.error && <div className={errStyle.error}>{meta.error}</div>}
                </div>
            )}
        />
        <Switch defaultChecked className={style.switcher} onClick={() => setValue(!value)}/>
        {value && <span>{description}</span>}
    </div>


export default InputWithToggle;
