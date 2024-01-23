import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const Aboutpage = () => {
    useEffect(() => { document.title = 'Wallywood' }, []);

    return (
        <>
            <Header />
            <Footer />
        </>
    )
};

export default Aboutpage;