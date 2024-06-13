import React from 'react';

const styles = {
    userInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%' // 필요에 따라 조정
    },
    heading: {
        margin: 5 // 필요에 따라 조정
    }
}

function UserInfo(props) {
    const user = {
        name: '송수미',
        email: 'song@example.com'
    };

    const today = new Date();    
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    return (
        <div style={styles.userInfo}>
            <h2 style={styles.heading}>{user.name}님 안녕하세요 !</h2>
            <h4 style={styles.heading}>날짜 : {formattedDate}</h4>
        </div>
    );
}

export default UserInfo;