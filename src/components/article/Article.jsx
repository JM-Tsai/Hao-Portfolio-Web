import styles from './Article.module.scss';
// import treeImage from '../../images/tree.png';
// import coffeeImage from '../../images/coffee2.png';
import PropTypes from 'prop-types';

Article.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    text: PropTypes.string,
    boxImage1: PropTypes.node,
    boxImage2: PropTypes.node,
    className: PropTypes.string,
    className1: PropTypes.string,
}

 function Article(props) {

    return (
            <div className={`${styles.narrative} ${props.className}`} style={{height: '500px'}}>
                <div className={styles.narrative__boxText}>
                    <h2>{props.title}</h2>
                    <p className={props.className1}>{props.text}</p>
                </div>

                <div className={styles.narrative__box__images}>
                    <img alt='images' src={props.boxImage1} />
                    <img alt='images' src={props.boxImage2} />
                </div>
            </div>
    )
}

export default Article;
