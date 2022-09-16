import { openModal } from '../../store/actions/userActions';
import styles from './BurgerMenu.module.scss';
import { useAppDispatch } from '../../utils/hooks';
import ModalStatus from '../../enum/ModalStatus';

const BurgerMenu = (props: any) => {

    const dispatch = useAppDispatch();

    const openSignUpModal = () => {
        props.close(false)
        dispatch(openModal(ModalStatus.SignUp))
    }
    const openLoginModal = () => {
        props.close(false)
        dispatch(openModal(ModalStatus.LogIn))
    }
    const openLogoutModal = () =>{
        props.close(false)
        dispatch(openModal(ModalStatus.LogOut))
    }
    return(
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <a className={styles.menuButton} onClick={openLogoutModal}>Profile</a>
                <a className={styles.menuButton}>Flowers</a>
                <a className={styles.menuButton}>Latest sightings</a>
                <a className={styles.menuButton}>Favorites</a>
                <a className={styles.menuButton}>Settings</a>
                <a className={styles.loginButton} onClick={openLoginModal}>Login</a>
                <button className={styles.newAccountButton} onClick={openSignUpModal}>New account</button>
            </div>
        </div>
    )
}

export default BurgerMenu;