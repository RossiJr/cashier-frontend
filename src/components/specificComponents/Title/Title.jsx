import React from 'react';

import styles from './Title.module.css';
import globalStyles from '../../Global.module.css';

export const Title = ({value}) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={globalStyles.title1}>{value}</h1>
        </div>
    )
};

export default Title;