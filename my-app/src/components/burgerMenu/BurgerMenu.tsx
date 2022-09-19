import { closeMenu, openModal, openLoginForm, openSignUpForm, openLogoutForm } from '../../store/actions/userActions';
import styles from './BurgerMenu.module.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {useEffect, useState} from 'react';
import ModalStatus from '../../enum/ModalStatus';

const width = window.innerWidth;
const MOBILE_WIDTH = 768;

const BurgerMenu = () => {

    const dispatch: any = useAppDispatch();
    const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() =>{
        setIsMobile(width < MOBILE_WIDTH);
    }, [width])

    const showLoginForm = () =>{
        dispatch(closeMenu())
        if(isMobile)
            dispatch(openLoginForm())
        else
            dispatch(openModal(ModalStatus.LogIn))
    }

    const showSignUpForm = () =>{
        dispatch(closeMenu())
        if(isMobile)
            dispatch(openSignUpForm())
        else
            dispatch(openModal(ModalStatus.SignUp))
    }
    const showLogoutForm = () =>{
        dispatch(closeMenu())
        if(isMobile)
            dispatch(openLogoutForm())
        else
            dispatch(openModal(ModalStatus.LogOut))
    }
    return(
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                {isAuthorized && <a className={styles.menuButton} onClick={showLogoutForm}>Profile</a>}
                <a className={styles.menuButton}>Flowers</a>
                <a className={styles.menuButton}>Latest sightings</a>
                <a className={styles.menuButton}>Favorites</a>
                {isAuthorized && <a className={styles.menuButton}>Settings</a>}
                {!isAuthorized && <a className={styles.loginButton} onClick={showLoginForm}>Login</a>}
                {!isAuthorized && <button className={styles.newAccountButton} onClick={showSignUpForm}>New account</button>}
            </div>
        </div>
    )
}

export default BurgerMenu;