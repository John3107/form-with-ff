import React from 'react';
import style from './Header.module.scss';
import {ArrowLeftOutlined} from "@ant-design/icons";

const Header = () =>
    <div className={style.header}>
        <div>
            <ArrowLeftOutlined/>
            <span className={style.text}>Створення персони</span>
        </div>
    </div>

export default Header;