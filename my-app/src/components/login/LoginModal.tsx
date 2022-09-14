import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import styles from './LoginModal.module.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { loginUser } from '../../store/actions/userActions';
import ErrorLabel from '../errorLabel/ErrorLabel';
import { useEffect } from 'react';

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
                <h1 className={styles.title}>Welcome Back</h1>
                <form onSubmit={handleSubmit((data) =>{
                    dispatch(loginUser(data));
                })}>
                    <div className={styles.inputContainer}>
                        <input {...register('email', {required: true})} placeholder='Email Address' type='text' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('password', {required: true})} placeholder='Password' type='password' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        { message && <ErrorLabel content={message}></ErrorLabel> }
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