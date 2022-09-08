import styles from './HomeSearch.module.scss';

function HomeSearch () {

    return(
        <div className={styles.container}>
            <h1 className={styles.searchTitle}>Discover flowers around you</h1>
            <h5 className={styles.searchLabel}>Explore between more than 8427 sightings</h5>
            <input className={styles.searchInput} placeholder="Looking for something specific?"></input>
        </div>
    );
}

export default HomeSearch;