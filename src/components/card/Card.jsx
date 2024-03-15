import styles from './Card.module.scss'
import PropTypes from 'prop-types';

Card.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
}

function Card(props) {

    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;