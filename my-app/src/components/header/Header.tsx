import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import {useState, useEffect} from 'react';
import SignUpModal from '../signUp/SignUpModal';
import LoginModal from '../login/LoginModal';

function Header () {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

    const openSignUpModal = () => {
        setIsOpen(true);
    }
    const openLoginModal = () => {
        setLoginModalIsOpen(true);
    }

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
                    <a className={styles.headerLoginButton} onClick={openLoginModal}>Login</a>
                    <button className={styles.newAccountButton} onClick={openSignUpModal}>New account</button>
                    <SignUpModal close={setIsOpen} modalIsOpen={modalIsOpen}></SignUpModal>
                    <LoginModal close={setLoginModalIsOpen} modalIsOpen={loginModalIsOpen}></LoginModal>
                </div>
        </header>
    );
}

export default Header;