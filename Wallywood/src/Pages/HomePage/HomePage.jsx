import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';

const Homepage = () => {
    useEffect(() => { document.title = 'Wallywood' }, []);

    return (
        <>
            <Header />
            <Footer />
        </>
    )
};

export default Homepage;