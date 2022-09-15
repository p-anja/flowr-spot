import Modal from 'react-modal';
import { closeModal } from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import styles from './NotificationModal.module.scss';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '290px',
      width: '440px',
      borderRadius: '3px',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)',
      overflow: 'visible'
    },
  };

interface INotificationModalProps {
    modalIsOpen: boolean
}

const NotificationModal = (props: INotificationModalProps) =>{
    const dispatch = useAppDispatch();
    const content = useAppSelector((state) => state.auth.content);

    return(
        <Modal 
        isOpen={props.modalIsOpen}
        style={customStyles}
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