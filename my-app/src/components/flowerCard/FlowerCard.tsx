import styles from './FlowerCard.module.scss';
import flowerPic from '../../assets/flowerPic.svg'
import star from '../../assets/star.svg'

interface IFlowerProps {
    flower: {
        id: number,
        name: string,
        latin_name: string,
        sightings: number,
        profile_picture: string,
        favorite: boolean
    }
}
function FlowerCard (props: IFlowerProps) {

    return(
        <div className={styles.cardContainer}>
            <div className={styles.background}/>
            <img src={props.flower.profile_picture} className={styles.profilePicture}></img>
            <div className={styles.cardTop}>
                <img src={star}></img>
            </div>
            <div className={styles.cardBottom}>
                <h5 className={styles.cardTitle}>{props.flower.name}</h5>
                <label className={styles.cardLabel}>{props.flower.latin_name}</label>
                <label className={styles.sightings}>{props.flower.sightings} sightings</label>
            </div>
        </div>
        
    );
}

export default FlowerCard;