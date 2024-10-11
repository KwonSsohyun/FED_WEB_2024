import React from 'react';
import UserData from '../../types/UserData';
import styles from '../../styles/UserDataPage.module.css';

interface UserDataPageProps {
    userData: UserData[];
}

export default function UserDataPage({ userData }: UserDataPageProps) {
    return <div>
        <h1>사용자 데이터</h1>
            <ul>
                {userData.map((user) => (
                    <li key={user.id} className={styles.userItem}>
                        <h4>이름 : {user.name}</h4>
                        <p>언어 : {user.language}</p>
                        <p>아이디 : {user.id}</p>
                        <p>소개 : {user.bio}</p>
                        <p>버전 : {user.version}</p>
                    </li>
                ))}
            </ul>
    </div>
}