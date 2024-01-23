import Nav from "../Nav/Nav"
import styles from './Header.module.scss';

const Header = () => {

    const navItems = [
        { path: "/", name: 'Hjem' },
        { path: "/plakater", name: 'Plakater' },
        { path: "/om-os", name: 'Om Os' },
        { path: "/kontakt", name: 'Kontakt' },
        { path: "/login", name: 'Login' },
    ]
    return (
        <div className={styles.content}>
            <Nav heading="Wallywood" items={navItems} />
        </div>

    )
}

export default Header