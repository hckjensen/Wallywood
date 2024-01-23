import styles from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ section }) => {

    return (
        <>
            <section className={styles.section}>
                <article className={styles.sectionArticle}>
                    <h3>{section.heading}</h3>
                    <p>{section.text}</p>
                    <p>{section.text2}</p>
                    <p>{section.text3}</p>
                </article>
                <picture className={styles.sectionImage}>
                    <img src={section.image} alt="bigmoney" />
                </picture>

            </section>
        </>
    )

}

Section.propTypes = {
    section: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        text2: PropTypes.string.isRequired,
        text3: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
}



export default Section;