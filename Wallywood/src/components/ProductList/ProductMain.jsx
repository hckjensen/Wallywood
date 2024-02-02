import GenreList from './GenreList';
import styles from './Product.module.scss';

import { Outlet } from 'react-router-dom';

const ProductComponent = () => {
    return (
        <div className={styles.grid}>
            <GenreList />
            <Outlet />
        </div>
    )
}

export default ProductComponent;