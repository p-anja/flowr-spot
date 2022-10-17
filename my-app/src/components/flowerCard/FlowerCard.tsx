import styles from './FlowerCard.module.scss';
import star from '../../assets/star.svg';
import starColor from '../../assets/starColor.svg';

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

const FlowerCard = ({flower}: IFlowerProps) => {

    const {id, name, latin_name, sightings, profile_picture, favorite} = flower;

    const handleChange = () =>{
        //TO DO after API is fixed
    }

    return(
        <div className={styles.cardContainer}>
            <div className={styles.background}/>
            <img src={profile_picture} className={styles.profilePicture}></img>
            <div className={styles.cardTop}>
                <img src={favorite ? starColor : star} onClick={handleChange} className={styles.favoriteButton}></img>
            </div>
            <div className={styles.cardBottom}>
                <h5 className={styles.cardTitle}>{name}</h5>
                <label className={styles.cardLabel}>{latin_name}</label>
                <label className={favorite ? styles.sightingsFavorite : styles.sightings}>{sightings} sightings</label>
            </div>
        </div>
        
    );
}

export default FlowerCard;