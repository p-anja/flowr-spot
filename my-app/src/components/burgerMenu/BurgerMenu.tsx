import { closeMenu, openModal, openLoginForm, openSignUpForm, openLogoutForm } from '../../store/actions/userActions';
import styles from './BurgerMenu.module.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useState, useEffect } from 'react';
import ModalStatus from '../../enum/ModalStatus';

const MOBILE_WIDTH = 768;

const BurgerMenu = () => {

    const dispatch: any = useAppDispatch();
    const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
    const [isMobile, setIsMobile] = useState(false);
    const [windowsWidth, setWindowsWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowsWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        setIsMobile(windowsWidth < MOBILE_WIDTH);

        return () => {
          window.removeEventListener("resize", handleResize);
        }
      }, [windowsWidth]);

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
                {isAuthorized && <a className={styles.menuButton} onClick={showLogoutForm} href="/#">Profile</a>}
                <a className={styles.menuButton} href="/#">Flowers</a>
                <a className={styles.menuButton} href="/#">Latest sightings</a>
                <a className={styles.menuButton} href="/#">Favorites</a>
                {isAuthorized && <a className={styles.menuButton} href="/#">Settings</a>}
                {!isAuthorized && <a className={styles.loginButton} onClick={showLoginForm} href="/#">Login</a>}
                {!isAuthorized && <button className={styles.newAccountButton} onClick={showSignUpForm}>New account</button>}
            </div>
        </div>
    )
}

export default BurgerMenu;