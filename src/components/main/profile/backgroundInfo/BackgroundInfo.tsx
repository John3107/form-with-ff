import React from 'react';
import style from './BackgroundInfo.module.scss';
import InputBase from "../../../../facades/inputBase/InputBase";
import InputSelect from "../../../../facades/inputSelect/InputSelect";

const BackgroundInfo = () => {
    const options = ['Електронною поштою', 'Телефоном']

    return <div className={style.backgroundInfo}>
        <InputBase label={'Країна народження*'} name={'country'}/>
        <InputBase label={'Місце народження*'} name={'city'}/>
        <InputSelect label={'Бажаний спосіб зв`зку з пацієнтом'} name={'touch'} options={options}/>
        <InputBase label={'Секретне слово(не менше 6 символів)*'} name={'secretWord'}/>
        <InputBase label={'Контактний номер телефону'} name={'phone'} placeholder={"+38 (___) ___-__-__"}/>
        <InputBase label={'Адреса електронної пошти'} name={'email'} placeholder={"example@example.com"}/>
    </div>
}
export default BackgroundInfo;
