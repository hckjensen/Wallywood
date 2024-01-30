import styles from './Product.module.scss';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function GenreList() {
    const [genres, setGenres] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/genre')
            .then(response => response.json())
            .then(data => setGenres(data))
            .catch(error => console.error(error));
    }, []); // empty dependency array means this effect runs once on mount

    const displayedGenres = isExpanded ? genres : genres.slice(0, 10);

    return (
        <>


            <ul className={styles.navList}>
                <h4>Filtre</h4>
                <p>Genre</p>
                {displayedGenres.map(genre => (
                    <li key={genre.id}>
                        <NavLink to={`/plakater/${genre.slug}`}>{genre.title}</NavLink>
                    </li>
                ))}
                {genres.length > 10 && (
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? 'Færre genrer' : 'Flere genrer'}
                    </button>
                )}
            </ul>
        </>
    );
}

export default GenreList;