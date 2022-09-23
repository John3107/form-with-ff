import React from 'react';
import style from './IdentityDocs.module.scss';
import {Field} from 'react-final-form';
import InputBase from "../../../facades/inputBase/InputBase";
import InputSelect from "../../../facades/inputSelect/InputSelect";

const IdentityDocs = () => {
    const options = [
        'Посвідчення особи, яка потребує додаткового захисту',
        'Паспорт (ID-картка)', 'Паспорт книжечка', 'Посвідка на постійне проживання в Україні',
        'Посвідка біженця', 'Посвідка на проживання', 'Тимчасове посвідчення громадянина України'
    ]

    return <div className={style.identityDocs}>
        <span className={style.title}>Документ, що посвідчує особу</span>
        <div className={style.main}>
            <InputSelect label={'Тип документу*'} name={'doc'} options={options}/>
            <InputBase label={'Серія (за наявності), номер*'} name={'passportNum'}/>
            <InputBase label={'Коли видано*'} name={'issuedDate'} placeholder={"31.12.1971"}/>
            <InputBase label={'Діє до'} name={'validUntil'} placeholder={"31.12.1971"}/>
            <div className={style.issuedBy}>
                <label>Ким видано*</label>
                <Field name="issuedBy" component="textarea" value=""/>
            </div>
            <div className={style.uniqueNumber}>
                <InputBase label={'Запис № (УНЗР)'} name={'uniqueNumber'} placeholder={'РРРРММДД-ХХХХХ'}/>
                <span>Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)</span>
            </div>
        </div>
    </div>
}
export default IdentityDocs;
