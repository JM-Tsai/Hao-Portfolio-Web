import styles from './MetalcraftCard.module.scss';
import MetalcraftCard from './MetalcraftCard';
import MetalcraftImage from '../../images/Metalcraft01.png'

function Metalcraft() {

    return (

        <div className={styles.layoutTitle}> 
            <h1>Metalcraft</h1>
            <p>Explore the World Through Lens and Metalwork.</p>
            
            <MetalcraftCard 
                title='綺夢花影'
                cardImg={MetalcraftImage}
                text='採用純銀為主材，精心鋪陳著各色瑩潤的合成石，仿若晨露般點綴在經典的花朵造型上。戒指不僅捕捉了自然的柔美，同時也映射出穿戴者的多彩夢想。'
            />
        </div>
        
    )
}

export default Metalcraft