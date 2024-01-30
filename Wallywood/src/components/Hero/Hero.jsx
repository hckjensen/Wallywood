import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

const Hero = ({ image }) => {
    return (
        <div className={styles.hero}>
            <img className={styles.banner} src={image} alt="" />
        </div>
    )
}

Hero.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Hero