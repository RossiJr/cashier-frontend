import React from 'react';

import styles from './Sidebar.module.css';
import globalStyle from '../Global.module.css';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export const Sidebar = ({ openSidebarToggle, openSideBar }) => {
    return (
        <aside className={`${styles.sidebar} ${openSidebarToggle ? styles.sidebarResponsive : styles.sidebarDefault}`}>
            <div className={styles.sidebarTitle}>
                <div className={styles.sidebarBrand}>
                    <BsCart3 className={styles.icon} /> Cashier
                </div>
                <span className={`${styles.icon} ${styles.closeIcon}`} onClick={openSideBar}>
                    X
                </span>
            </div>
            <ul className={styles.sidebarList}>
                <Link to="/">
                    <li className={styles.sidebarListItem}>
                        <BsGrid1X2Fill className={styles.icon} />Dashboard
                    </li>
                </Link>
                <Link to="/products">
                    <li className={styles.sidebarListItem}>
                        <BsFillArchiveFill className={styles.icon} />Products
                    </li>
                </Link>
                <li className={`${styles.sidebarListItem} ${globalStyle.hide}`}>
                    <a href=''>
                        <BsFillGrid3X3GapFill className={styles.icon} />Categories
                    </a>
                </li>
                <li className={`${styles.sidebarListItem} ${globalStyle.hide}`}>
                    <a href=''>
                        <BsPeopleFill className={styles.icon} />Customers
                    </a>
                </li>
                <li className={`${styles.sidebarListItem} ${globalStyle.hide}`}>
                    <a href=''>
                        <BsListCheck className={styles.icon} />Inventory
                    </a>
                </li>
                <li className={`${styles.sidebarListItem} ${globalStyle.hide}`}>
                    <a href=''>
                        <BsMenuButtonWideFill className={styles.icon} />Reports
                    </a>
                </li>
                <li className={`${styles.sidebarListItem} ${globalStyle.hide}`}>
                    <a href=''>
                        <BsFillGearFill className={styles.icon} />Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
};
export default Sidebar;