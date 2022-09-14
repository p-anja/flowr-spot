import {useEffect, useState} from 'react';
import SignUpModal from '../signUp/SignUpModal';
import LoginModal from '../login/LoginModal';
import LogoutModal from '../logout/LogoutModal';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import profilePic from '../../assets/profile-holder.svg';
import {setUser} from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const Header = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.auth.user)
    const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

    useEffect(() =>{
        if(isAuthorized)
            dispatch(setUser())
    }, [isAuthorized]);


    const openSignUpModal = () => {
        setIsOpen(true);
    }
    const openLoginModal = () => {
        setLoginModalIsOpen(true);
    }
    const openLogoutModal = () => {
        setLogoutModalIsOpen(true);
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
                    { !isAuthorized && <a className={styles.headerLoginButton} onClick={openLoginModal}>Login</a>}
                    { !isAuthorized && <button className={styles.newAccountButton} onClick={openSignUpModal}>New account</button>}
                    { isAuthorized && user && <a className={styles.headerButton} onClick={openLogoutModal}>{user.first_name} {user.last_name}</a>}
                    { isAuthorized && user && <img src={profilePic} className={styles.profilePicture} onClick={openLogoutModal}></img>}
                    <SignUpModal close={setIsOpen} modalIsOpen={modalIsOpen}></SignUpModal>
                    <LoginModal close={setLoginModalIsOpen} modalIsOpen={loginModalIsOpen}></LoginModal>
                    <LogoutModal close={setLogoutModalIsOpen} modalIsOpen={logoutModalIsOpen}></LogoutModal>
                </div>
        </header>
    );
}

export default Header;