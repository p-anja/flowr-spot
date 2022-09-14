import Modal from 'react-modal';
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
    close: (value: boolean) => void,
    modalIsOpen: boolean,
    content: string
}

const NotificationModal = (props: INotificationModalProps) =>{
    return(
        <Modal 
        isOpen={props.modalIsOpen}
        style={customStyles}
        onRequestClose={() => props.close(false)}
        >
            <div className={styles.container}>
                <label className={styles.label}>{props.content}</label>
                <button className={styles.button} onClick={() => props.close(false)}>OK</button>
            </div>
        </Modal>
    );
}

export default NotificationModal;