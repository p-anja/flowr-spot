import styles from './HomeSearch.module.scss';
import searchPic from '../../assets/search.svg';

const HomeSearch = () => {

    return(
        <div className={styles.container}>
            <h1 className={styles.searchTitle}>Discover flowers around you</h1>
            <h5 className={styles.searchLabel}>Explore between more than 8427 sightings</h5>
            <div className={styles.inputContainer}>
                <input className={styles.searchInput} placeholder="Looking for something specific?"></input>
                <img src={searchPic} className={styles.searchButton}></img>
            </div>
        </div>
    );
}

export default HomeSearch;