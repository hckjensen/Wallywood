import Nav from "../Nav/Nav"
import styles from './Header.module.scss';
import { useAuth } from "../Providers/AuthProvider";



const Header = () => {

    const { loginData } = useAuth();

    const navItems = [
        { path: "/", name: 'Hjem' },
        { path: "/plakater", name: 'Plakater' },
        { path: "/om-os", name: 'Om Os' },
        { path: "/kontakt", name: 'Kontakt' },
        { path: "/login", name: 'Login' },
    ]
    return (
        <>
            <div className={styles.content}>
                {loginData ? <p>Du er logget ind som </p> : <p>Du er ikke logget ind</p>}
                <Nav heading="Wallywood" items={navItems} />

            </div>

        </>

    )
}

export default Header