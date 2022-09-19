import styles from './ErrorLabel.module.scss';

const ErrorLabel = (props: any) =>(
        <label className={styles.label}>{props.content}</label>
    );

export default ErrorLabel;