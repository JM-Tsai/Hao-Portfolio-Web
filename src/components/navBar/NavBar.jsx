import { useState } from 'react';
import Link from './Link';
// 樣式與 icon
import styles from './NavBar.module.scss'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navber = () => {
    // 用於驗證響應式的導航欄狀態，初始值為 fslse 隱藏
    const [nav, setNav] =useState(false);

    // 集合 link 在陣列內，方便維護與map快速建置
    const links = [
        { label: 'Home', path: '/' },
        { label: 'Metalcraft', path: '/MetalcraftPage' },
        { label: 'About', path: '/AboutPage' },
        { label: 'Log in', path: '/LogInPage' }
    ];
    // map 映射
    const linksMap = links.map((link) => {
        return (
            <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
            </li>
        )
    })

    return (
        <header className={styles.navbar}>
            TimeWhispers
            <nav>
                {/* nav ? [styles.navbar__menu, styles.active].join(' ') : [styles.meun] */}
                <ul className={`${styles.navbar__menu} ${nav ? styles.navbar__active : ''}`}>
                    {linksMap}
                </ul>
            </nav>
            <div 
                className={styles.navbar__mobile_btn}
                onClick={() => setNav(!nav)}
            >
                {nav ? <IoClose /> : <CiMenuFries />}
            </div>
        </header>
    )
}

export default Navber