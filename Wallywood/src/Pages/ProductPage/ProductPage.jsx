import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import GenreList from "../../components/ProductList/GenreList";
import ContentWrapper from "../../components/ContentWrapper/ConterWrapper";

const ProductPage = () => {
    useEffect(() => { document.title = 'Wallywood' }, []);

    return (
        <>
            <Header />
            <ContentWrapper heading="Plakater">
                <GenreList />
            </ContentWrapper>

            <Footer />
        </>
    )
};

export default ProductPage;