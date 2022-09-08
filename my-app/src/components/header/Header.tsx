import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

function Header () {

    return(
        <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={logo} className={styles.logoPic}></img>
                    <h3 className={styles.logo}>FlowrSpot</h3>
                </div>
                <div className={styles.navigationContainer}>
                    <a className={styles.headerButton}>Flowers</a>
                    <a className={styles.headerButton}>Latest sightings</a>
                    <a className={styles.headerButton}>Favourites</a>
                    <a className={styles.headerLoginButton}>Login</a>
                    <button className={styles.newAccountButton}>New account</button>
                </div>
        </header>
    );
}

export default Header;