import Hero from '../components/hero/Hero';
import bugImage from '../images/bug.png';
// import Article from '../components/article/Article'
import ArticleParent from '../components/article/ArticleParent';
import NewsCard from '../components/card/NewsCard';
// import Footer from '../components/footer/Footer';

export default function HomePage() {
    return (
        <>
            <Hero 
                heroImage= {bugImage}
                heroTitleText= 'Capturing Moments, Preserving Eternity.'
                heroText= '捕捉瞬間，永恆保存'
                heroButtonText= 'Explore'
            />
            <ArticleParent />
            <NewsCard />
        </>
    ) 
}