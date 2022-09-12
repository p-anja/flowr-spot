import styles from './InfoLabel.module.scss';

interface IInfoLabel {
    name: string, 
    content: string
}

function InfoLabel (props: IInfoLabel) {

    return(
        <div className={styles.container}>
            <label className={styles.labelName}>{props.name}</label>
            <label className={styles.content}>{props.content}</label>
        </div>
    );
}

export default InfoLabel;