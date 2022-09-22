import React from 'react';
import style from './BackgroundInfo.module.scss';
import s from '../../../../assets/fcadeStyles/FcadeStyles.module.scss';
import {Field} from 'react-final-form';

const BackgroundInfo = () =>

    <div className={style.backgroundInfo}>
        <div className={s.field}>
            <label>Країна народження*</label>
            <Field name="country" component="input"/>
        </div>
        <div className={s.field}>
            <label>Місце народження*</label>
            <Field name="city" component="input"/>
        </div>
        <div className={s.field}>
            <label>Бажаний спосіб зв'зку з пацієнтом</label>
            <Field name="touch" component="select">
                <option style={{display: 'none'}}>--Вибрати--</option>
                <option value="touchEmail">Електронною поштою</option>
                <option value="touchPhone">Телефоном</option>
            </Field>
        </div>
        <div className={s.field}>
            <label>Секретне слово(не менше 6 символів)*</label>
            <Field name="secretWord" component="input"/>
        </div>
        <div className={s.field}>
            <label>Контактний номер телефону</label>
            <Field name="phone" component="input" placeholder="+38 (___) ___-__-__"/>
        </div>
        <div className={s.field}>
            <label>Адреса електронної пошти</label>
            <Field name="email" component="input" placeholder="example@example.com"/>
        </div>
    </div>

export default BackgroundInfo;
