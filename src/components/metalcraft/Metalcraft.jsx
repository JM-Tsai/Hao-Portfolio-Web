import styles from './MetalcraftCard.module.scss';
import MetalcraftCard from './MetalcraftCard';
import MetalcraftImage from '../../images/Metalcraft01.png'
import Metalcraft07Image from '../../images/Metalcraft07.png'
import Metalcraft06Image from '../../images/Metalcraft06.png'
import Metalcraft08Image from '../../images/Metalcraft08.png'

function Metalcraft() {

    return (

        <div className={styles.galleryBody}> 
            <div className={styles.layoutTitle}>
                <h1>Metalcraft</h1>
                <p>Explore the World Through Lens and Metalwork.</p>
            </div>
            <div className={styles.gallery}>
                <MetalcraftCard 
                title='綺夢花影'
                cardImg={MetalcraftImage}
                text='採用純銀為主材，精心鋪陳著各色瑩潤的合成石，仿若晨露般點綴在經典的花朵造型上。戒指不僅捕捉了自然的柔美，同時也映射出穿戴者的多彩夢想。'
                />
                <MetalcraftCard 
                    title='古銅紀念'
                    cardImg={Metalcraft07Image}
                    text='光影與色澤的交錯，宛如在回應那些被歷史記錄下來的黃金時代。佩戴它，就像是與遠古的智慧和美學進行了一場無言的對話，連結著過去與未來。'
                />
                <MetalcraftCard 
                    title='網絡序曲'
                    cardImg={Metalcraft06Image}
                    text='「網絡序曲」，它以複雜而精緻的鏤空技巧呈現，其靈感源自自然界中網狀的結構，如葉脈、蜘蛛網等，象徵著生命的連結和萬物的互相依存。'
                />
                <MetalcraftCard 
                    title='金屬遊樂園'
                    cardImg={Metalcraft08Image}
                    text='「金屬遊樂園」它呈現了金屬工藝不止於創作實用品，更能激發想象，創造出既有功能性又有裝飾性的藝術作品。每一件都是我的學習旅程上的足跡，記錄了從初學到熟練的過程。'
                />
            </div>
            <div style={{height: '50px'}}></div>
        </div>
        
    )
}

export default Metalcraft