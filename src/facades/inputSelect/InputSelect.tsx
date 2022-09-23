import React, {useState} from 'react';
import style from './InputSelect.module.scss'
import {Field} from 'react-final-form';
import {CheckOutlined} from "@ant-design/icons";

type PropsType = {
    label: string
    name: string
    options: string[]
}

const InputSelect = ({label, name, options}: PropsType) => {

    const [isShowContext, setIsShowContext] = useState<boolean>(false)
    const [currentValue, setCurrentValue] = useState<string>('--Вибрати--')


    const onChosenValue = (value: string) => {
        setIsShowContext(!isShowContext)
        setCurrentValue(value)
    }
    const onShowContext = () => {
        setIsShowContext(!isShowContext)
        if(!options.includes('--Вибрати--')) options.unshift('--Вибрати--')
    }

    return <div className={style.inputSelect}>
        <label>{label}</label>
        <Field name={name}
               component="input"
               defaultValue={currentValue}
               initialValue={currentValue}/>
        <div className={style.arrowDown}></div>
        <div className={style.listCaller} onClick={onShowContext}>
        </div>
        {isShowContext && <div className={style.contextMenu}>
            {
                options.map((el, key) =>
                    <div key={key}
                          className={style.option}
                          onClick={() => onChosenValue(el)}>
                        {el === currentValue && <CheckOutlined className={style.checkMark}/>}
                        {el}
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

