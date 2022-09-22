import React from 'react';
import Profile from "./profile/Profile";
import {Form} from "react-final-form";
import style from "./Main.module.scss";

const Main = () => {
    //  ТИПИЗИРОВАТЬ
    const onSubmit = (e: any) => {
        console.log(e)
    }
    //  ТИПИЗИРОВАТЬ
    const validate = (e: any): any => {
        console.log(e)
    }

    return <div className={style.main}>
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Profile/>
                </form>
            )}
        />
    </div>
}
export default Main;
