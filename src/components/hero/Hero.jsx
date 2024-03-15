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

// 畫面字體滾輪視差
// const [scrollY, setScrollY] = useState(0)

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY
//             setScrollY(currentScrollY)
//         }
//         window.addEventListener('scroll', handleScroll)

//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return (
//         <div className={styles.hero} style={{ backgroundPosition: `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)` }}>
//             <div className={styles.hero__title}>Tuku</div>
        
//         </div>
//     )
