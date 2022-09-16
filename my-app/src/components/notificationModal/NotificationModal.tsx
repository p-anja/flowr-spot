import Modal from 'react-modal';
import { closeModal } from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import styles from './NotificationModal.module.scss';

interface INotificationModalProps {
    modalIsOpen: boolean
}

const NotificationModal = (props: INotificationModalProps) =>{
    const dispatch = useAppDispatch();
    const content = useAppSelector((state) => state.auth.content);

    return(
        <Modal 
        isOpen={props.modalIsOpen}
        className={styles.modal}
        onRequestClose={() => dispatch(closeModal())}
        >
            <div className={styles.container}>
                <label className={styles.label}>{content}</label>
                <button className={styles.button} onClick={() => dispatch(closeModal())}>OK</button>
            </div>
        </Modal>
    );
}

export default NotificationModal;