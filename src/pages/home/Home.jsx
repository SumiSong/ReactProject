import React from 'react';
import UserInfo from '../../component/UserInfo';
import NavbarComponent from '../../component/NavComponent';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <div>
            <UserInfo/>
            <NavbarComponent/>
            <div className="content">
                <Outlet /> {/* 자식 라우트 렌더링 */}
            </div>
        </div>
    );
}

export default Home;
