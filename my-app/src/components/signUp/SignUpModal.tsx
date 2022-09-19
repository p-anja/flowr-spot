import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import { closeModal, signUpUser } from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import ErrorLabel from '../errorLabel/ErrorLabel';
import styles from './SignUpModal.module.scss';

Modal.setAppElement('#root');
const content = 'Congratulations! You have successfully signed up for FlowrSpot!'

interface ISignUpModalProps {
    modalIsOpen: boolean
}

const SignUpModal = (props: ISignUpModalProps) => {

    const dispatch: any = useAppDispatch();
    const message = useAppSelector((state) => state.auth.errorMessage);
    const {register, handleSubmit, formState: {errors}} = useForm();

    return(
            <Modal
            isOpen={props.modalIsOpen}
            className={styles.container}
            onRequestClose={() => dispatch(closeModal())}
            >
                <h1 className={styles.title}>Create an account</h1>
                <form onSubmit={handleSubmit((data) =>{
                       dispatch(signUpUser(data, content));

                })}>
                    <div className={styles.inputContainer}>
                        <input {...register('first_name', {required: true, pattern: /[A-Za-z]/ })} placeholder='First name' className={styles.input}></input>
                        <input {...register('last_name', {required: true, pattern: /[A-Za-z]/ })} placeholder='Last name' className={styles.input}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        { (errors.first_name || errors.last_name) && <ErrorLabel content='Invalid name. Please try again.' />}
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('date_of_birth', {required: true, pattern: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/})} placeholder='Date of Birth' type='date' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('email', {required: true, pattern: /^([\w-]+\.)+@([\w-]+\.)+[\w-]{2,4}$/})} placeholder='Email Address' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        { errors.email && <ErrorLabel content='Invalid email. Please try again.'/>}
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('password', {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})} placeholder='Password' type='password' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        { errors.password && <ErrorLabel content='Password must contain minimum eight characters, at least one letter and one number. Please try again.' />}
                    </div>
                    <div className={styles.inputContainer}>
                        { message && <ErrorLabel content={message} />}
                    </div>
                    <div className={styles.inputContainer}>
                        <button type='submit' className={styles.button}>Create account</button>
                    </div>
                </form>
                <div className={styles.labelContainer}>
                    <label className={styles.label} onClick={() => dispatch(closeModal())}>I don't want to register</label>
                </div>
            </Modal>
    );
}

export default SignUpModal;