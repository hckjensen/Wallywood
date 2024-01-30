import styles from './Product.module.scss';
import { useEffect, useState } from 'react';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [displayCount, setDisplayCount] = useState(9);

    useEffect(() => {
        fetch('http://localhost:3000/posters/list_by_genre/drama')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []); // empty dependency array means this effect runs once on mount

    const displayedProducts = products.slice(0, displayCount);


    return (
        <>
            <div className={styles.container}>
                <div className={styles.productList}>
                    {displayedProducts.map(product => (
                        <div key={product.id} className={styles.productCard}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Kr. {product.price},00</p>
                            <button>Læg I kurv</button>
                            {/* other product details... */}
                        </div>
                    ))}

                </div>
                <div className={styles.buttonContainer}>
                    {products.length > displayCount && (
                        <button className={styles.expandButton} onClick={() => setDisplayCount(displayCount + 9)}>View More</button>
                    )}
                </div>

            </div>

        </>
    );

}

export default ProductList