import Hero from "../components/hero/Hero"
import streetImage from '../images/street.png';
import About from "../components/about/About";

export default function AboutPage() {
    return (
        <>
            <Hero 
                heroImage={streetImage}
                heroTitleText= 'About'
                heroText= '關於我'
                heroButtonText= 'Explore'
            />
            <About />
        </>
    ) 
}