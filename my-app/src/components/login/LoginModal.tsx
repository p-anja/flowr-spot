import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import styles from './LoginModal.module.scss';

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

const LoginModal = (props: ILoginModalProps) => {
    
    const {register, handleSubmit, formState: {errors}} = useForm();

    return(
            <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            onRequestClose={() => props.close(false)}
            >
                <h1 className={styles.title}>Welcome Back</h1>
                <form onSubmit={handleSubmit((data) =>{
                    axios.post(axios.defaults.baseURL + '/v1/users/login', data)
                    .then(res =>{
                        localStorage.setItem('token', res.data.auth_token);
                        props.close(false);
                    })
                    .catch(err =>{
                        console.log(err);
                    })
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
    );
}
export default LoginModal;