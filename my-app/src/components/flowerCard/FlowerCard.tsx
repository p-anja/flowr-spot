import styles from './FlowerCard.module.scss';
import flowerPic from '../../assets/flowerPic.svg'
import star from '../../assets/star.svg'

function FlowerCard () {

    return(
        <div className={styles.cardContainer}>
            <div className={styles.background}/>
            <img src={flowerPic}></img>
            <div className={styles.cardTop}>
                <img src={star}></img>
            </div>
            <div className={styles.cardBottom}>
                <h5 className={styles.cardTitle}>Balloon flower</h5>
                <label className={styles.cardLabel}>Platycodon grandiflorus</label>
                <label className={styles.sightings}>127 sightings</label>
            </div>
        </div>
        
    );
}

export default FlowerCard;