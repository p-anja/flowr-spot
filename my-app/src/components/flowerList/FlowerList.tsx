import internal from 'stream';
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
function FlowerList (props: IFlowerListProps) {

    return(
        <div className={styles.container}>
            {
                props.flowers.map((flower) =>{
                    return(
                        <FlowerCard flower={flower}></FlowerCard>
                    );
                })
            }
        </div>
    );
}

export default FlowerList;