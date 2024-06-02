import React from 'react';

function UserInfo(props) {
    const user = {
        name: '송수미',
        email: 'song@example.com'
    };
    return (
        <div className="user-info">
            <h2>{user.name}님 안녕하세요 !</h2>
        </div>
    );
}

export default UserInfo;