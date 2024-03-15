import styles from './Article.module.scss';
import personpng from '../../images/person05.png';
import person07 from '../../images/person07.png';
import Metalcraft04 from '../../images/Metalcraft04.png';
import Metalcraft02 from '../../images/Metalcraft02.png';
import Article from './Article';

function ArticleParent() {

    return (
        <div className={styles.narrative}> 
            <h1>Explore</h1>
            <p>Explore the World Through Lens and Metalwork.</p>

            <Article
                className={styles.narrative__box}
                title={`時光留痕`}
                text={`摩托車與市場，一靜一動，共同編織出這座城市的心跳。這是一段無聲卻動人的對話，是時間在每個人心中悄然走過的痕跡。透過鏡頭，我們尋覓那些短暫而永恆的片段，讓攝影凝固的每一刻，都成為流逝時光的庇護所。`}
                boxImage1={personpng}
                boxImage2={person07}
            />
            <Article 
                className={styles.narrative__box__reverse}
                className1={styles.narrative__boxText__reverse}
                title={`Metalcraft`}
                text={`每一次敲擊都是對材質極限的探索，每一次磨光都是對完美無瑕的追求。這是一場時間與創意的對話，是手工與自然的和諧，也是傳統與現代的交融。是永恆的美學，也是流轉時光的見證，更是每個佩戴者獨特故事的一部分。`}
                
                boxImage1={Metalcraft04}
                boxImage2={Metalcraft02}
            />
        </div>
    )
}

export default ArticleParent