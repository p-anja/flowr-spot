import { useForm } from "react-hook-form";
import { loginUser } from "../../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import ErrorLabel from "../errorLabel/ErrorLabel";
import styles from './LoginModal.module.scss';

const content = 'Congratulations! You have successfully logged in for FlowrSpot!'

const LoginForm = () =>{

    const dispatch: any = useAppDispatch();
    const message = useAppSelector((state) => state.auth.errorMessage);
    const { register, handleSubmit } = useForm();

    return(
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Welcome Back</h1>
                <form onSubmit={handleSubmit((data) =>{
                    dispatch(loginUser(data, content));
                })}>
                    <div className={styles.inputContainer}>
                        <input {...register('email', {required: true})} placeholder='Email Address' type='text' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        <input {...register('password', {required: true})} placeholder='Password' type='password' className={styles.input2}></input>
                    </div>
                    <div className={styles.inputContainer}>
                        { message && <ErrorLabel content={message}/> }
                    </div>
                    <div className={styles.inputContainer}>
                        <button type='submit' className={styles.button}>Login to your account</button>
                    </div>
                </form>
        </div>
    )
}

export default LoginForm;