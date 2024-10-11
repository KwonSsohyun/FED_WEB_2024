import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return <div>
        <nav>
            <Link href="/">홈</Link><br />
            <Link href="/about">소개</Link><br />
            <Link href="/userList">고객정보</Link>
        </nav>
    </div>
}