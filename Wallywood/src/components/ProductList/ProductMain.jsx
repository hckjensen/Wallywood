import GenreList from './GenreList';
import styles from './Product.module.scss';
import ProductList from './ProductList';

const ProductComponent = () => {
    return (
        <div className={styles.grid}>
            <GenreList />
            <ProductList />
        </div>
    )
}

export default ProductComponent;