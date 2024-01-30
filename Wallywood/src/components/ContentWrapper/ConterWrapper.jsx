import PropTypes from 'prop-types';
import styles from './ContentWrapper.module.scss';


const ContentWrapper = ({ heading, children }) => { // children is the content inside the ContentWrapper
    return (
        <>

            <div className={styles.contentWrapper}>
                <h3>{heading}</h3>
                {children}
            </div>
        </>
    );
}

ContentWrapper.propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default ContentWrapper;