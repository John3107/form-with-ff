import React from 'react';
import style from './Header.module.scss';
import {ArrowLeftOutlined} from "@ant-design/icons";

const Header = () =>
    <div className={style.header}>
            <ArrowLeftOutlined/>
            <span className={style.text}>Створення персони</span>
    </div>

export default Header;