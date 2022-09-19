import {useEffect} from 'react';
import SignUpModal from '../signUp/SignUpModal';
import LoginModal from '../login/LoginModal';
import LogoutModal from '../logout/LogoutModal';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import profilePic from '../../assets/profile-holder.svg';
import {closeMenu, setUser, openMenu, closeLoginForm, closeSignUpForm, closeLogoutForm} from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import NotificationModal from '../notificationModal/NotificationModal';
import ModalStatus from '../../enum/ModalStatus';
import { openModal } from '../../store/actions/userActions';
import menuIcon from '../../assets/mm_hamburger.svg';
import xIcon from '../../assets/x-button.svg';

const Header = () => {

    const dispatch: any = useAppDispatch()
    const user = useAppSelector((state) => state.auth.user)
    const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
    const modalStatus = useAppSelector((state) => state.auth.modalStatus);
    const menuIsOpened = useAppSelector((state) => state.auth.openMenu);
    const loginFormIsOpened = useAppSelector((state) => state.auth.openLoginForm)
    const signUpFormIsOpened = useAppSelector((state) => state.auth.openSignUpForm);
    const logoutFormIsOpened = useAppSelector((state) => state.auth.openLogoutForm);

    useEffect(() =>{
        if(isAuthorized)
            dispatch(setUser())
            // eslint-disable-next-line
    }, [isAuthorized]);

    const openSignUpModal = () => {
        dispatch(openModal(ModalStatus.SignUp))
    }
    const openLoginModal = () => {
        dispatch(openModal(ModalStatus.LogIn))
    }
    const openLogoutModal = () => {
        dispatch(openModal(ModalStatus.LogOut))
    }
    const openAndCloseMenu = () => {

       if(menuIsOpened)
            dispatch(closeMenu())
       else {
            if(loginFormIsOpened)
                dispatch(closeLoginForm())
            else if(signUpFormIsOpened)
                dispatch(closeSignUpForm())
            else if(logoutFormIsOpened)
                dispatch(closeLogoutForm())
            dispatch(openMenu())
       }
    }

    const checkModalStatus = (modalStatus === ModalStatus.LogInSuccess) || 
                             (modalStatus === ModalStatus.SignUpSuccess) || 
                             (modalStatus === ModalStatus.LogOutSuccess);

    return(
        <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={logo} className={styles.logoPic} alt=''></img>
                    <h3 className={styles.logo}>FlowrSpot</h3>
                </div>
                <div className={styles.hamburgerMenuContainer}>
                    <img src={menuIsOpened ? xIcon : menuIcon} onClick={openAndCloseMenu} alt=''></img>
                </div>
                <div className={styles.navigationContainer}>
                    <a className={styles.headerButton} href="/#">Flowers</a>
                    <a className={styles.headerButton} href="/#">Latest sightings</a>
                    <a className={styles.headerButton} href="/#">Favourites</a>
                    { !isAuthorized && <a className={styles.headerLoginButton} onClick={openLoginModal} href="/#">Login</a>}
                    { !isAuthorized && <button className={styles.newAccountButton} onClick={openSignUpModal}>New account</button>}
                    { isAuthorized && user && <a className={styles.headerButton} onClick={openLogoutModal} href="/#">{user.first_name} {user.last_name}</a>}
                    { isAuthorized && user && <img src={profilePic} className={styles.profilePicture} onClick={openLogoutModal} alt=''></img>}
                    <SignUpModal modalIsOpen={modalStatus === ModalStatus.SignUp}></SignUpModal>
                    <LoginModal modalIsOpen={modalStatus === ModalStatus.LogIn}></LoginModal>
                    <LogoutModal modalIsOpen={modalStatus === ModalStatus.LogOut}></LogoutModal>
                    <NotificationModal modalIsOpen={checkModalStatus}></NotificationModal>
                </div>
        </header>
    );
}

export default Header;