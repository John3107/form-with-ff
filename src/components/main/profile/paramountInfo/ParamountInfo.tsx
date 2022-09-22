import React, {useState} from 'react';
import style from './ParamountInfo.module.scss';
import s from '../../../../assets/fcadeStyles/FcadeStyles.module.scss';
import {Field} from 'react-final-form';
import {Switch} from 'antd';

const ParamountInfo = () => {
    const [disableFatherName, setDisableFatherName] = useState<boolean>(false)
    const [disableIPN, setDisableIPN] = useState<boolean>(false)

    return <div className={style.paramountInfo}>
        <div className={s.field}>
            <label>Прізвище*</label>
            <Field name="lastName" component="input"/>
        </div>
        <div className={s.field}>
            <label>Ім'я*</label>
            <Field name="firstName" component="input"/>
        </div>
        <div className={s.field}>
            {!disableFatherName
                ? <label>По батькові*</label>
                : <label style={{color: '#313131'}}>Немає по батькові</label>
            }
            <Field name="fatherName" disabled={disableFatherName} component="input"/>
            <Switch defaultChecked onChange={(disable) => setDisableFatherName(!disable)}/>
            {disableFatherName && <span>Немає по батькові згідно документів</span>}
        </div>
        <div className={s.field}>
            {!disableIPN
                ? <label>РНОКПП (ІПН)*</label>
                : <label style={{color: '#313131'}}>Немає РНОКПП (ІПН)</label>
            }
            <Field name="IPN" disabled={disableIPN} component="input"/>
            <Switch defaultChecked onChange={(disable) => setDisableIPN(!disable)}/>
            {disableIPN && <span>Немає ІПН за віком чи має відмітку у паспорті</span>}
        </div>
        <div className={s.field}>
            <label>Дата народження*</label>
            <Field name="birthday" component="input"/>
        </div>
        <div className={s.field}>
            <label>Стать*</label>
            <Field name="sex" component="select">
                    <option style={{display: 'none'}}>--Вибрати--</option>
                    <option value="man" className={s.option}>Чоловіча</option>
                    <option value="woman">Жіноча</option>
            </Field>
        </div>
    </div>
}
export default ParamountInfo;
