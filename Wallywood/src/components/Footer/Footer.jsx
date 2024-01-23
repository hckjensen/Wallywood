import styles from './Footer.module.scss';
import PropTypes from 'prop-types';


const Footer = () => {

    const sections = [
        {
            header: "Wallywood",
            links: [
                { text: "Øster Uttrupvej 1" },
                { text: "9000 Aalborg" },


            ]
        },
        {
            links: [
                { text: "CVR: 12345678" },
                { text: "MAIL: email@email.dk" },
                { text: "Tlf: 0192 3023" },

            ],
        },
        {
            header: "Sociale medier",
            icons: [
                // { src: FB, alt: "facebook" },
                // { src: IN, alt: "linkedin" },
                // { src: IG, alt: "instagram" },
                // { src: PIN, alt: "pintrest" }
            ],
        },
    ];
    return (
        <footer className={styles.footer}>
            <div className={styles.contentWrapper}>
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3>{section.header}</h3>
                        {section.subheader && <h4>{section.subheader}</h4>}
                        {section.links && section.links.map((link, linkIndex) => (
                            <p key={linkIndex}>{link.text}</p>
                        ))}
                        {section.icons && section.icons.map((icon, iconIndex) => (
                            <img key={iconIndex} src={icon.src} alt={icon.alt} />
                        ))}

                    </div>
                ))}
            </div>
        </footer>
    );
}

Footer.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        subheader: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        icons: PropTypes.arrayOf(PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })),
    })).isRequired,
};

export default Footer;