import React from 'react';
import Profile from "./profile/Profile";
import {Form} from "react-final-form";
import style from "./Main.module.scss";
import IdentityDocs from "./identityDocuments/IdentityDocs";
import {validation} from "../../utils/validation";
import {FormType} from "../../types/types";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {InitialStateType} from "../../bll/form-reducer";

const Main = () => {
    const data = useSelector<AppRootStateType, InitialStateType>(state => state.form)

    const onSubmit = (e: FormType) => {
        console.log(e)
    }

    const validate = (e: FormType) => {
        console.log(e)
        return validation(
            {
                ...e,
                fatherName: { isDisable: data.disableFatherName, value: e.fatherName },
                IPN: { isDisable: data.disableIPN, value: e.IPN }
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
