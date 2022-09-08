import FlowerCard from '../flowerCard/FlowerCard';
import styles from './FlowerList.module.scss';

function FlowerList () {

    return(
        <div className={styles.container}>
            <FlowerCard></FlowerCard>
            <FlowerCard></FlowerCard>
            <FlowerCard></FlowerCard>
            <FlowerCard></FlowerCard>
            <FlowerCard></FlowerCard>
            <FlowerCard></FlowerCard>
            <FlowerCard></FlowerCard>
            <FlowerCard></FlowerCard>
        </div>
    );
}

export default FlowerList;