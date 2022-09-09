import { symlinkSync } from 'fs';
import Modal from 'react-modal';
import styles from './SignUpModal.module.scss';

Modal.setAppElement('#root');
  
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '410px',
      width: '440px',
      borderRadius: '3px',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)',
    },
  };

function SignUpModal () {

    return(
        <div className={styles.container}>
            <Modal
            isOpen={true}
            style={customStyles}
            >
                <h1 className={styles.title}>Create an account</h1>
                <div className={styles.inputContainer}>
                    <input placeholder='First name' className={styles.input}></input>
                    <input placeholder='Last name' className={styles.input}></input>
                </div>
                <div className={styles.inputContainer}>
                    <input placeholder='Date of Birth' className={styles.input2}></input>
                </div>
                <div className={styles.inputContainer}>
                    <input placeholder='Email Address' className={styles.input2}></input>
                </div>
                <div className={styles.inputContainer}>
                    <input placeholder='Password' type='password' className={styles.input2}></input>
                </div>
                <div className={styles.inputContainer}>
                    <button className={styles.button}>Create account</button>
                </div>
            </Modal>
        </div>
        
    );
}

export default SignUpModal;