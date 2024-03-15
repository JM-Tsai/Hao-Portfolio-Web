import styles from './Footer.module.scss'
import { BsInstagram } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";

function Footer() {
    
    return (
        <div className={styles.footer}>
            <div className={styles.footer__head}>
                <div>
                    <h1>TimeWhispers</h1>
                    <p>Explore the World Through Lens and Metalwork.</p>
                </div>
                <div className={styles.footer__button}>
                    <div className={styles.button}>
                        <a href='https://www.instagram.com/yk752332023/'>
                            <div className={styles.icon}>
                                <i><BsInstagram /></i>
                            </div>
                            <span>Instagram</span>
                        </a>
                    </div>

                    <div className={styles.button}>
                        <div className={styles.icon}>
                            <i><BiMessageRounded /></i>
                        </div>
                        <span>About Me</span>
                    </div>

                </div>
            </div>

            <div className={styles.footer__main}>
                <h4>目前沒有資訊分享</h4>
            </div>
        </div>
    )
}

export default Footer;