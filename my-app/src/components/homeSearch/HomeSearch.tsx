import styles from './HomeSearch.module.scss';
import searchPic from '../../assets/search.svg';

const HomeSearch = (props: any) => {

    const sendSearchTerm = (event: any) =>{
        const term = event.target.value
        if(term === '')
            props.setSearchTerm(null)
        else
            props.setSearchTerm(term)
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.searchTitle}>Discover flowers around you</h1>
            <h5 className={styles.searchLabel}>Explore between more than 8427 sightings</h5>
            <div className={styles.inputContainer}>
                <input className={styles.searchInput} placeholder="Looking for something specific?" onChange={(e) => sendSearchTerm(e)}></input>
                <img src={searchPic} className={styles.searchButton} />
            </div>
        </div>
    );
}

export default HomeSearch;