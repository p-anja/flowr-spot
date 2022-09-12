import Modal from 'react-modal';
import styles from './LoginModal.module.scss';
import {useForm} from 'react-hook-form';

// Modal.setAppElement('#root');

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

interface ILoginModalProps {
    close: (value: boolean) => void,
    modalIsOpen: boolean
}

function LoginModal (props: ILoginModalProps) {
    
    const {register, handleSubmit, formState: {errors}} = useForm();

    return(
        // <div className={styles.container}>
            <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            onRequestClose={() => props.close(false)}
            >
                <h1 className={styles.title}>Welcome Back</h1>
                <form onSubmit={handleSubmit((data) =>{
                    console.log(data)
                })}>
                    <div className={styles.inputContainer}>
                        <input {...register('email', {required: true})} placeholder='Email Address' type='text' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('password', {required: true})} placeholder='Password' type='password' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <button type='submit' className={styles.button}>Login to your account</button>
                    </div>
                </form>
                <div className={styles.labelContainer}>
                    <label className={styles.label} onClick={() => props.close(false)}>I don't want to login</label>
                </div>
            </Modal>
        // </div>
    );
}
export default LoginModal;