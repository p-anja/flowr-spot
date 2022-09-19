import profilePic from '../../assets/profile-holder.svg';
import xButton from '../../assets/x-button.svg';
import { closeModal, logoutUser } from '../../store/actions/userActions';
import { useAppDispatch } from '../../utils/hooks';
import InfoLabel from '../infoLabel/InfoLabel';
import styles from './LogoutModal.module.scss';

const content = 'You are successfully logged out.'

const LogoutForm = () =>{

    const dispatch: any = useAppDispatch();

    const logout = () =>{
        dispatch(logoutUser(content));
    }

    return(
        <div className={styles.formContainer}>
            <div className={styles.container2}>
                    <div className={styles.container1}>
                        <div className={styles.imageContainer}>
                            <img src={profilePic}></img>
                        </div>
                        <div className={styles.titleContainer}>
                            <h4 className={styles.title}>Michael Berry</h4>
                            <label className={styles.label}>47 sightings</label>
                        </div>
                    </div>
                    <div className={styles.labelContainer}>
                        <InfoLabel name='First name' content='Michael'></InfoLabel>
                        <InfoLabel name='Last name' content='Berry'></InfoLabel>
                        <InfoLabel name='Date of Birth' content='May 20, 1980'></InfoLabel>
                        <InfoLabel name='Email address' content='michael.berry@gmail.com'></InfoLabel>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={() => logout()}>Logout</button>
                </div>
        </div>
    )
}

export default LogoutForm;