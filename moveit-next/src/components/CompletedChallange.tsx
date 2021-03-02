import styles from '../styles/components/CompletedChallange.module.css';

export function CompletedChallange() {
    return (
        <div className={styles.completedChallangeContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}