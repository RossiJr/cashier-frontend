import React from 'react';

import styles from './Products.module.css';
import globalStyle from '../Global.module.css';
import Title from '../specificComponents/Title/Title';
import ProductTable from '../specificComponents/Table/ProductTable';

export const Products = () => {
    return (
        <div className={styles.productsWrapper}>
            <Title value="Products" />
            <div className={`${styles.container} ${styles.elevatedEffect}`}>
                    <ProductTable />
            </div>
        </div>
    )
};

export default Products;