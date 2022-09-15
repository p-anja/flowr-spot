import Modal from 'react-modal';
import profilePic from '../../assets/profile-holder.svg';
import xButton from '../../assets/x-button.svg';
import { closeModal, logoutUser } from '../../store/actions/userActions';
import { useAppDispatch } from '../../utils/hooks';
import InfoLabel from '../infoLabel/InfoLabel';
import styles from './LogoutModal.module.scss';

const content = 'You are successfully logged out.'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '550px',
      width: '590px',
      borderRadius: '3px',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)',
    },
  };
interface ILogoutModalProps {
    modalIsOpen: boolean
}

const LogoutModal =  (props: ILogoutModalProps) => {

    const dispatch: any = useAppDispatch();

    const logout = () =>{
        dispatch(logoutUser(content));
    }

    return(
            <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            >
                <div className={styles.container}>
                    <div className={styles.xButtonContainer}>
                        <img onClick={() => dispatch(closeModal())} src={xButton} className={styles.buttonImage}></img>
                    </div>
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
            </Modal>    
    );
}
export default LogoutModal;