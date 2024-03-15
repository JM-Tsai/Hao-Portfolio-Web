import Hero from "../components/hero/Hero"
import MetalcraftImage from '../images/Metalcraft02.png';
import Metalcraft from "../components/metalcraft/Metalcraft";

export default function MetalcraftPage() {
    return (
        <>
            <Hero 
                heroImage={MetalcraftImage}
                heroTitleText= 'Metalcraft'
                heroText= '金屬工藝'
                heroButtonText= 'Explore'
            />
            <Metalcraft />
        </>
    ) 
}