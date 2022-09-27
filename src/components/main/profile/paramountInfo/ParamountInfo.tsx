import React from 'react';
import style from './ParamountInfo.module.scss';
import InputBase from "../../../../facades/inputBase/InputBase";
import InputWithToggle from "../../../../facades/inputWithToggle/InputWithToggle";
import InputSelect from "../../../../facades/inputSelect/InputSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../bll/store";
import {InitialStateType, isDisableFatherNameAC, isDisableIPNAC} from "../../../../bll/form-reducer";

const ParamountInfo = () => {
    const data = useSelector<AppRootStateType, InitialStateType>(state => state.form)
    const dispatch = useDispatch()

    return <div className={style.paramountInfo}>
        <InputBase label={'Прізвище*'} name={'lastName'}/>
        <InputBase label={'Ім`я*'} name={'firstName'}/>
        <InputWithToggle label={data.disableFatherName ? 'Немає по батькові' : 'По батькові*'}
                         name={'fatherName'}
                         value={data.disableFatherName}
                         description={'Немає по батькові згідно документів'}
                         setValue={(val) => dispatch(isDisableFatherNameAC(val))}/>
        <InputWithToggle label={data.disableIPN ? 'Немає РНОКПП (ІПН)' : 'РНОКПП (ІПН)*'}
                         name={'IPN'}
                         value={data.disableIPN}
                         description={'Немає ІПН за віком чи має відмітку у паспорті'}
                         setValue={(val) => dispatch(isDisableIPNAC(val))}/>
        <InputBase label={'Дата народження*'} name={'birthday'}/>
        <InputSelect label={'Стать*'} name={'sex'} options={data.sexOptions}/>
    </div>
}
export default ParamountInfo;
