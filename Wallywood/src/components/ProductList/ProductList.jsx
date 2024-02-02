import styles from './Product.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [displayCount, setDisplayCount] = useState(9);
    const [sortOption, setSortOption] = useState('none');
    const { genre } = useParams();

    useEffect(() => {
        const url = genre
            ? `http://localhost:3000/posters/list_by_genre/${genre}`
            : 'http://localhost:3000/posters';
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, [genre]);

    const displayedProducts = products
        .slice(0, displayCount)
        .sort((a, b) => {
            if (sortOption === 'lowToHigh') {
                return a.price - b.price;
            } else if (sortOption === 'highToLow') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });


    return (
        <>
            <div className={styles.container}>
                <div className={styles.sortContainer}>
                    <label htmlFor="sort">Sorter: </label>
                    <select id="sort" value={sortOption} onChange={e => setSortOption(e.target.value)}>
                        <option value="none">Title</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
                <div className={styles.productList}>
                    {displayedProducts.map(product => (
                        <div key={product.id} className={styles.productCard}>
                            <Link to={`/plakater/${genre}/${product.slug}`}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                            </Link>
                            <p>Kr. {product.price},00</p>
                            <button>Læg I kurv</button>

                        </div>
                    ))}

                </div>
                <div className={styles.buttonContainer}>
                    {products.length > displayCount && (
                        <button className={styles.expandButton} onClick={() => setDisplayCount(displayCount + 9)}>Vis mere</button>
                    )}
                </div>

            </div>

        </>
    );

};




export default ProductList