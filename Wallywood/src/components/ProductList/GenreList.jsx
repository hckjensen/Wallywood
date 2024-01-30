import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function GenreList() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/genre')
            .then(response => response.json())
            .then(data => setGenres(data))
            .catch(error => console.error(error));
    }, []); // empty dependency array means this effect runs once on mount

    return (
        <>
            <h3>Genre</h3>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id}>
                        <NavLink to={`/plakater/${genre.slug}`}>{genre.title}</NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default GenreList;