import React from 'react';
import styles from './DashboardCard.module.css';


export const DashboardCard = ({ title, value, icon, bgColor = '#2962ff' }) => {
    return (
        <div className={styles.card} style={{backgroundColor: bgColor}}>
            <div className={styles.cardInner}>
                <h3>{title}</h3>
                {icon}
            </div>
            <h1>{value}</h1>
        </div>
    )
}
export default DashboardCard;