import { stat } from 'fs';
import Modal from 'react-modal';
import { closeLoginForm, closeLogoutForm, closeModal, closeSignUpForm, openLoginForm } from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import styles from './NotificationModal.module.scss';

interface INotificationModalProps {
    modalIsOpen: boolean
}

const NotificationModal = (props: INotificationModalProps) =>{
    const dispatch = useAppDispatch();
    const content = useAppSelector((state) => state.auth.content);
    const loginFormIsOpened = useAppSelector((state) => state.auth.openLoginForm)
    const signUpFormIsOpened = useAppSelector((state) => state.auth.openSignUpForm)
    const logoutFormIsOpened = useAppSelector((state) => state.auth.openLogoutForm);

    const closeNotificationModal = () =>{
        if(loginFormIsOpened)
            dispatch(closeLoginForm())
        else if(signUpFormIsOpened)
            dispatch(closeSignUpForm())
        else if(logoutFormIsOpened)
            dispatch(closeLogoutForm())
        dispatch(closeModal())
    }
    return(
        <Modal 
        isOpen={props.modalIsOpen}
        className={styles.modal}
        onRequestClose={() => dispatch(closeModal())}
        >
            <div className={styles.container}>
                <label className={styles.label}>{content}</label>
                <button className={styles.button} onClick={closeNotificationModal}>OK</button>
            </div>
        </Modal>
    );
}

export default NotificationModal;