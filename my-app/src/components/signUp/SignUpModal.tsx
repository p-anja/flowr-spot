import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import { signUpUser } from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import ErrorLabel from '../errorLabel/ErrorLabel';
import styles from './SignUpModal.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
      overflow: 'visible'
    },
  };

  interface ISignUpModalProps {
    close: (value: boolean) => void,
    modalIsOpen: boolean
  }

const SignUpModal = (props: ISignUpModalProps) => {

    const dispatch = useAppDispatch();
    const message = useAppSelector((state) => state.auth.errorMessage);
    const {register, handleSubmit, formState: {errors}} = useForm();

    useEffect(() =>{
        if(message === null)
            props.close(false);
    }, [message])

    return(
            <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            onRequestClose={() => props.close(false)}
            >
                <h1 className={styles.title}>Create an account</h1>
                <form onSubmit={handleSubmit((data) =>{

                       dispatch(signUpUser(data));
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
                        { message && <ErrorLabel content={message}></ErrorLabel>}
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