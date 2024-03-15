import { createContext } from "react";
import styles from '../components/article/Article.module.scss';
import PropTypes from 'prop-types';

ArticleProvider.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    text: PropTypes.string,
    BoxImages1: PropTypes.node,
    BoxImages2: PropTypes.node,
}

const ArticleContext = createContext();


function ArticleProvider({ 
    children,
    title,
    text,
    BoxImages1,
    BoxImages2
}) { 
    const ArticlePart2 = () => {

        return (
            <div className={styles.narrative__box}>
                <div className={styles.narrative__boxText}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>

                <div className={styles.narrative__box__images}>
                    <img alt='images' src={BoxImages1} />
                    <img alt='images' src={BoxImages2} />
                </div>
            </div>
        )
    }


    return (

        <ArticleContext.Provider value={<ArticlePart2 />}>
            {children}
        </ArticleContext.Provider>
    )
}
export {ArticleProvider}
export default  ArticleContext