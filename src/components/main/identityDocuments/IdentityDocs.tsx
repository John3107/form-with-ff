import React from 'react';
import style from './IdentityDocs.module.scss';
import {Field} from 'react-final-form';
import InputBase from "../../../facades/inputBase/InputBase";
import InputSelect from "../../../facades/inputSelect/InputSelect";
import {InfoCircleOutlined} from "@ant-design/icons";
import errStyle from "../../../facades/styles/ErrorStyle.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {InitialStateType} from "../../../bll/form-reducer";

const IdentityDocs = () => {
    const data = useSelector<AppRootStateType, InitialStateType>(state => state.form)

    return <div className={style.identityDocs}>
        <span className={style.title}>Документ, що посвідчує особу</span>
        <div className={style.main}>
            <InputSelect label={'Тип документу*'} name={'doc'} options={data.docsOptions}/>
            <InputBase label={'Серія (за наявності), номер*'} name={'passportNum'}/>
            <InputBase label={'Коли видано*'} name={'issuedDate'} placeholder={"31.12.1971"}/>
            <InputBase label={'Діє до'} name={'validUntil'} placeholder={"31.12.1971"}/>

            <div className={style.issuedBy}>
                <label>Ким видано*</label>
                <Field
                    name={'issuedBy'}
                    render={({input, meta}) => (
                        <div className={style.fieldBodyTextarea}>
                            <textarea {...input}
                                   style={{borderColor: meta.touched && meta.error && 'red'}}/>
                            {meta.touched && meta.error &&
                                <div style={{bottom: '-18px'}} className={errStyle.error}>{meta.error}</div>}
                        </div>
                    )}
                />
            </div>

            <div className={style.uniqueNumber}>
                <label>Запис № (УНЗР)</label>
                <Field
                    name={'uniqueNumber'}
                    render={({input, meta}) => (
                        <div className={style.fieldBody}>
                            <input {...input}
                                   placeholder={'РРРРММДД-ХХХХХ'}
                                   style={{borderColor: meta.touched && meta.error && 'red'}}/>
                            {meta.touched && meta.error && <InfoCircleOutlined className={errStyle.errorIcon}/>}
                            {meta.touched && meta.error && <div style={{bottom: '-45px'}}
                                                                className={errStyle.error}>{meta.error}</div>}
                        </div>
                    )}/>
                <span>Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)</span>
            </div>
        </div>
    </div>
}
export default IdentityDocs;
