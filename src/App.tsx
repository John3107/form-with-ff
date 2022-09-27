import React from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {InitialStateType} from "./bll/form-reducer";
import reg from "./assets/icons/registration-success.svg";
import style from './App.module.scss';

const App = () => {
    const data = useSelector<AppRootStateType, InitialStateType>(state => state.form)

    return <div className={style.app}>
        {!data.isCreatedPerson
            ? <div>
                <Header/>
                <Main/>
            </div>
            : <div className={style.registrationSuccess}>
                <img src={reg} alt="registration success"/>
                <div className={style.text}>Персона успішно створена</div>
            </div>}
    </div>
}
export default App;
