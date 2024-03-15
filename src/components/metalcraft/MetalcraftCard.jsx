import styles from './MetalcraftCard.module.scss';
import PropTypes from 'prop-types';

MetalcraftCard.propTypes = {
    cardImg: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

function MetalcraftCard(props) {

    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={props.cardImg}></img>
            </div>

            <div className={styles.context}>
                <div className={styles.contextDetails}>
                    <h2>{props.title}</h2>

                    <div className={styles.data}>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetalcraftCard