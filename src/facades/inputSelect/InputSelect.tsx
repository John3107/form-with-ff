import React, {useState} from 'react';
import style from './InputSelect.module.scss';
import {Field} from 'react-final-form';
import {CheckOutlined} from "@ant-design/icons";
import {OptionType} from "../../types/types";

type PropsType = {
    label: string
    name: string
    options: OptionType[]
}

const InputSelect = ({label, name, options}: PropsType) => {

    const [isShowContext, setIsShowContext] = useState<boolean>(false)
    const [currentValue, setCurrentValue] = useState<string>(options[0].value)

    const onChosenValue = (value: string) => {
        setIsShowContext(!isShowContext)
        setCurrentValue(value)
    }

    return <div className={style.inputSelect}>
        <label>{label}</label>
        <Field name={name}
               component="input"
               initialValue={currentValue}/>
        <div className={style.arrowDown}></div>
        <div className={style.listCaller} onClick={() => setIsShowContext(!isShowContext)}>
        </div>
        {isShowContext && <div className={style.contextMenu}>
            {
                options.map((el, key) =>
                    <div key={key}
                         className={style.option}
                         onClick={() => onChosenValue(el.value)}>
                        {el.value === currentValue && <CheckOutlined className={style.checkMark}/>}
                        {el.value}
                    </div>)
            }
        </div>}
        {isShowContext &&
            <div className={style.listCloser}
                 onClick={() => setIsShowContext(false)}></div>
        }
    </div>
}
export default InputSelect;

