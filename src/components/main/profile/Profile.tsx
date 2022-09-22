import React from 'react';
import style from './Profile.module.scss';
import ParamountInfo from "./paramountInfo/ParamountInfo";
import BackgroundInfo from "./backgroundInfo/BackgroundInfo";

const Profile = () =>
    <div className={style.profile}>
        <span className={style.title}>Данні пацієнта</span>
        <ParamountInfo/>
        <BackgroundInfo/>
    </div>

export default Profile;
