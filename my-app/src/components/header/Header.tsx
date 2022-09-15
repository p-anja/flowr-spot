import {useEffect, useState} from 'react';
import SignUpModal from '../signUp/SignUpModal';
import LoginModal from '../login/LoginModal';
import LogoutModal from '../logout/LogoutModal';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import profilePic from '../../assets/profile-holder.svg';
import {setUser} from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import NotificationModal from '../notificationModal/NotificationModal';
import ModalStatus from '../../enum/ModalStatus';
import { openModal } from '../../store/actions/userActions';

const Header = () => {
    const dispatch: any = useAppDispatch()
    const user = useAppSelector((state) => state.auth.user)
    const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
    const modalStatus = useAppSelector((state) => state.auth.modalStatus);
    const modalContent = useAppSelector((state) => state.auth.content);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
    const [showNotificationModalSignUp, setNotificationModalSignUp] = useState(false);
    const [showNotificationModalLogin, setNotificationModalLogin] = useState(false);

    useEffect(() =>{
        if(isAuthorized)
            dispatch(setUser())
    }, [isAuthorized]);


    const openSignUpModal = () => {
        dispatch(openModal(ModalStatus.SignUp))
    }
    const openLoginModal = () => {
        dispatch(openModal(ModalStatus.LogIn))
    }

    const checkModalStatus = (modalStatus === ModalStatus.LogInSuccess) || (modalStatus === ModalStatus.SignUpSuccess) || (modalStatus === ModalStatus.LogOutSuccess);

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
                    { isAuthorized && user && <a className={styles.headerButton} onClick={() => dispatch(openModal(ModalStatus.LogOut))}>{user.first_name} {user.last_name}</a>}
                    { isAuthorized && user && <img src={profilePic} className={styles.profilePicture} onClick={() => dispatch(openModal(ModalStatus.LogOut))}></img>}
                    <SignUpModal modalIsOpen={modalStatus === ModalStatus.SignUp}></SignUpModal>
                    <LoginModal modalIsOpen={modalStatus === ModalStatus.LogIn}></LoginModal>
                    <LogoutModal modalIsOpen={modalStatus === ModalStatus.LogOut}></LogoutModal>
                    <NotificationModal modalIsOpen={checkModalStatus}></NotificationModal>
                </div>
        </header>
    );
}

export default Header;