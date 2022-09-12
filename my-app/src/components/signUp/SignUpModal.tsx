import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpModal.module.scss';

// Modal.setAppElement('#root');
 
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
      overflow: 'visible'
    },
  };

  interface ISignUpModalProps {
    close: (value: boolean) => void,
    modalIsOpen: boolean
  }

function SignUpModal (props: ISignUpModalProps) {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const history  = useNavigate();

    return(
            <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            onRequestClose={() => props.close(false)}
            >
                <h1 className={styles.title}>Create an account</h1>
                <form onSubmit={handleSubmit((data) =>{
                    axios.post(axios.defaults.baseURL + '/v1/users/register', data)
                        .then(res =>{
                            localStorage.setItem('token', res.data.auth_token);
                            props.close(false);
                        })
                        .catch(err =>{
                            console.log(err);
                        })
                })}>
                    <div className={styles.inputContainer}>
                        <input {...register('first_name', {required: true})} placeholder='First name' className={styles.input}></input>
                        <input {...register('last_name', {required: true})} placeholder='Last name' className={styles.input}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('date_of_birth', {required: true})} placeholder='Date of Birth' type='date' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('email', {required: true})} placeholder='Email Address' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('password', {required: true})} placeholder='Password' type='password' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <button type='submit' className={styles.button}>Create account</button>
                    </div>
                </form>
                <div className={styles.labelContainer}>
                    <label className={styles.label} onClick={() => props.close(false)}>I don't want to register</label>
                </div>
            </Modal>
    );
}

export default SignUpModal;