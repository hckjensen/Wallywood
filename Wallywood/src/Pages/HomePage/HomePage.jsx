import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero';

import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';
import Banner from '../../assets/images/curtain.jpg'
import ContentWrapper from '../../components/ContentWrapper/ConterWrapper';

const Homepage = () => {
    useEffect(() => { document.title = 'Wallywood' }, []);

    return (
        <>
            <Header />
            <Hero image={Banner} />
            <ContentWrapper heading="Sidste nyt...">


            </ContentWrapper>
            <Footer />

        </>
    )
};

export default Homepage;