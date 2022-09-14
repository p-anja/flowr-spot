import styles from './ErrorLabel.module.scss';

const ErrorLabel = (props: any) => {
    return(
        <label className={styles.label}>{props.content}</label>
    )
}

export default ErrorLabel;