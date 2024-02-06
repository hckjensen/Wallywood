import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';
import LoginForm from '../../components/LoginForm/Login';
import ContentWrapper from '../../components/ContentWrapper/ConterWrapper';

const LoginPage = () => {
    useEffect(() => { document.title = 'Wallywood' }, []);

    return (
        <>
            <Header />
            <ContentWrapper heading="Login">
                <LoginForm />
            </ContentWrapper>
            <Footer />
        </>
    )
};

export default LoginPage;