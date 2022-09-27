import React from 'react';
import Profile from "./profile/Profile";
import {Form} from "react-final-form";
import style from "./Main.module.scss";
import IdentityDocs from "./identityDocuments/IdentityDocs";
import {validation} from "../../utils/validation";
import {FormType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {InitialStateType, isCreatedPersonAC, registrationDataAC} from "../../bll/form-reducer";

const Main = () => {
    const data = useSelector<AppRootStateType, InitialStateType>(state => state.form)
    const dispatch = useDispatch()

    const onSubmit = (e: FormType) => {
        dispatch(registrationDataAC(
            {
                ...e,
                touch: data.touchOptions.find(el => el.value === e.touch)?.label,
                doc: data.docsOptions.find(el => el.value === e.doc)?.label,
                sex: data.sexOptions.find(el => el.value === e.sex)?.label,
                IPN: data.disableIPN ? null : e.IPN,
                fatherName: data.disableFatherName ? null : e.fatherName,
            }))
        dispatch(isCreatedPersonAC(true))
    }

    const validate = (e: FormType) => {
        return validation(
            {
                ...e,
                fatherName: {isDisable: data.disableFatherName, value: e.fatherName},
                IPN: {isDisable: data.disableIPN, value: e.IPN}
            }
        )
    }

    return <div className={style.main}>
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Profile/>
                    <IdentityDocs/>
                    <button type="submit" className={style.buttonSubmit}>Створити</button>
                </form>
            )}
        />
    </div>
}
export default Main;
