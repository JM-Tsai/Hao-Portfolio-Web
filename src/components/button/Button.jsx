import PropTyps from 'prop-types';
import styles from './Button.module.scss'

Button.propTypes = {
    children: PropTyps.node     
}

export default function Button({ children, ...rest }) {

    return (
        <button {...rest} className={styles.buttonStyle}>{children}</button>
    )
}