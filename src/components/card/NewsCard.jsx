import styles from './Card.module.scss'
import Card from './Card'
import news01 from '../../images/news01.png';
import news02 from '../../images/news02.png';
import news03 from '../../images/news3.png';

function NewsCard() {
    return (
        <div className={styles.CardBox}>
            <h1>最近活動</h1>
            <p>In every click, a story unfolds.</p>

            <div className={styles.CardBox__newsCard}>
                <Card 
                    image={news01}
                    heading='土庫 春華牛車店'
                    text='三代的手藝，從繁華到落寞' 
                />
                <Card 
                    image={news02} 
                    heading='溫蒂漫步'
                    text='為了溫蒂 漫步斗六
                    現場真的不一樣'
                />
                <Card 
                    image={news03} 
                    heading='台中'
                    text='一定要帶相機出門的吧！'
                />
            </div>
        </div>
    )
}

export default NewsCard