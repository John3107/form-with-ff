import React, {useState} from 'react';
import style from './ParamountInfo.module.scss';
import InputBase from "../../../../facades/inputBase/InputBase";
import InputWithToggle from "../../../../facades/inputWithToggle/InputWithToggle";
import InputSelect from "../../../../facades/inputSelect/InputSelect";

const ParamountInfo = () => {
    const [disableFatherName, setDisableFatherName] = useState<boolean>(false)
    const [disableIPN, setDisableIPN] = useState<boolean>(false)
    const options = ['Чоловіча', 'Жіноча']

    return <div className={style.paramountInfo}>
        <InputBase label={'Прізвище*'} name={'lastName'}/>
        <InputBase label={'Ім`я*'} name={'firstName'}/>
        <InputWithToggle label={disableFatherName ? 'Немає по батькові' : 'По батькові*'}
                         name={'fatherName'}
                         value={disableFatherName}
                         setValue={setDisableFatherName}/>
        <InputWithToggle label={disableIPN ? 'Немає РНОКПП (ІПН)' : 'РНОКПП (ІПН)*'}
                         name={'IPN'}
                         value={disableIPN}
                         setValue={setDisableIPN}/>
        <InputBase label={'Дата народження*'} name={'birthday'}/>
        <InputSelect label={'Стать*'} name={'sex'} options={options}/>
    </div>
}
export default ParamountInfo;
