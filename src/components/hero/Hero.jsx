import styles from './Hero.module.scss';
import Button from '../button/Button.jsx';
import PropTypes from 'prop-types';

Hero.propTypes = {
    heroImage: PropTypes.node.isRequired,
    heroTitleText: PropTypes.string,
    heroText: PropTypes.string,
    heroButtonUrl: PropTypes.node,
    heroButtonText: PropTypes.string,
};

// 傳遞三個道具參數使用
function Hero({ heroImage, heroTitleText, heroText, heroButtonUrl, heroButtonText }) {

    return (
        <>
            <div className={styles.hero}>
                <img src={heroImage} alt='image' className={styles.hero__image}></img>
            
                <div className={styles.hero__text}>
                    <h1>{heroTitleText}</h1>
                    <p>{heroText}</p>
                    <Button><a href={heroButtonUrl}>{heroButtonText}</a></Button>
                </div>
            </div>
        </>
    );
}

export default Hero;
