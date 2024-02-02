import styles from './Product.module.scss';
// Import necessary hooks and components
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function GenreList() {
    // State for storing the genres fetched from the API
    const [genres, setGenres] = useState([]);
    // State for controlling whether the full list of genres is displayed
    const [isExpanded, setIsExpanded] = useState(false);

    // Fetch the genres from the API when the component mounts
    useEffect(() => {
        fetch('http://localhost:3000/genre')
            .then(response => response.json())
            .then(data => setGenres(data)) // Store the fetched genres in state
            .catch(error => console.error(error));
    }, []); // Empty dependency array means this effect runs once on mount

    // Determine which genres to display based on whether the list is expanded
    const displayedGenres = isExpanded ? genres : genres.slice(0, 10);

    return (
        <>
            <ul className={styles.navList}>
                <h4>Filtre</h4>
                <p>Genre</p>
                {/* Map over the genres to display and create a NavLink for each one */}
                {displayedGenres.map(genre => (
                    <li key={genre.id}>
                        <NavLink to={`/plakater/${genre.slug}`}>{genre.title}</NavLink>
                    </li>
                ))}
                {/* If there are more than 10 genres, display a button to expand or collapse the list */}
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