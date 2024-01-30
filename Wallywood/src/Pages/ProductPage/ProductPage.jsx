import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import ContentWrapper from "../../components/ContentWrapper/ConterWrapper";
import ProductComponent from "../../components/ProductList/ProductMain";

const ProductPage = () => {
    useEffect(() => { document.title = 'Wallywood' }, []);

    return (
        <>
            <Header />
            <ContentWrapper heading="Plakater">
                <ProductComponent />
            </ContentWrapper>

            <Footer />
        </>
    )
};

export default ProductPage;