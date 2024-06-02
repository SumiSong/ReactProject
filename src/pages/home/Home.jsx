import React from 'react';
import UserInfo from '../../component/UserInfo';
import NavbarComponent from '../../component/NavComponent';
import { Outlet } from 'react-router-dom';
import style from '../../component/Component.css';

function Home() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <UserInfo />
                <NavbarComponent />
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Home;
