import styles from './About.module.scss';
import about01Img from '../../images/about01.png';

function About() {

    return (
        <div className={styles.about}>
            <div className={styles.about__me}>
                
                <div className={styles['about__me__text']}>
                    <h3>About Me</h3>
                    <p>嗨，大家好！我來自雲林，是一個熱愛攝影和金屬工藝的學生。我喜歡捕捉生活中的美好瞬間，同時在金屬上發揮創意，製作出獨特的藝術品和實用的物品。</p>
                    <p>透過鏡頭展現獨特的視角一直是我的探索重點。攝影讓我能夠記錄生活中的美好時刻，並努力尋找每個場景的獨特之處。</p>
                    <p>另外，我喜歡在金屬上發揮創意，製作出獨特的藝術品和實用的物品。這種手工藝的過程不僅讓我感受到對材料的掌控，更讓我在每一次創作中找到了滿足感。</p>
                    <p>如果你想了解更多關於我作品和創作過程的信息，歡迎訪問我的Instagram！</p>
                </div>
                <div className={styles['about__me__img']}>
                    <div className={styles['about__me__img-imgBottom']}>
                        <img src={about01Img} className={styles['about__me__img-imgBody']} />
                    </div>
                </div>
            </div>
{/* 
            <div>
                down
            </div> */}
        </div>
    )
}

export default About;