import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import styles from './LoginModal.module.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { loginUser } from '../../store/actions/userActions';
import ErrorLabel from '../errorLabel/ErrorLabel';
import { closeModal } from '../../store/actions/userActions';


const content = 'Congratulations! You have successfully logged in for FlowrSpot!'

// Modal.setAppElement('#root');

interface ILoginModalProps {
    modalIsOpen: boolean
}

const LoginModal = (props: ILoginModalProps) => {

    const dispatch: any = useAppDispatch();
    const message = useAppSelector((state) => state.auth.errorMessage);
    const {register, handleSubmit} = useForm();
    return(
            <Modal
            className={styles.container}
            isOpen={props.modalIsOpen}
            onRequestClose={() => dispatch(closeModal())}
            >
                <h1 className={styles.title}>Welcome Back</h1>
                <form data-cy='login-form' onSubmit={handleSubmit((data) =>{
                    dispatch(loginUser(data, content));
                })}>
                    <div className={styles.inputContainer}>
                        <input data-cy='email' {...register('email', {required: true})} placeholder='Email Address' type='text' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input data-cy='password' {...register('password', {required: true})} placeholder='Password' type='password' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        { message && <ErrorLabel content={message}/> }
                    </div>
                    <div className={styles.inputContainer}>
                        <button type='submit' className={styles.button}>Login to your account</button>
                    </div>
                </form>
                <div className={styles.labelContainer}>
                    <label data-cy='close-button' className={styles.label} onClick={() => dispatch(closeModal())}>I don't want to login</label>
                </div>
            </Modal>
    );
}

export default LoginModal;