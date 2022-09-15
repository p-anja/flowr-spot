import FlowerCard from '../flowerCard/FlowerCard';
import styles from './FlowerList.module.scss';

interface Flower {
    id: number,
    name: string,
    latin_name: string,
    sightings: number,
    profile_picture: string,
    favorite: boolean

}

interface IFlowerListProps {
    flowers: Array<Flower>
}
const FlowerList = ({flowers}: IFlowerListProps) => {

    return(
        <div className={styles.container}>
            {
                flowers.map((flower) =>{
                    return(
                        <FlowerCard flower={flower} key={flower.id}></FlowerCard>
                    );
                })
            }
        </div>
    );
}

export default FlowerList;