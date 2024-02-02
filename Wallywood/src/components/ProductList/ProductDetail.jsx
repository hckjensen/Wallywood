import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Product.module.scss';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/posters/${slug}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }, [slug]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.productDetail}>
                <picture>
                    <img src={product.image} alt={product.name} />
                </picture>
                <div className={styles.info}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Kr. {product.price},00</p>
                    <button>Læg I kurv</button>
                    <button onClick={() => navigate(-1)}>Tilbage</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;