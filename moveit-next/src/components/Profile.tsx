import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://i.pinimg.com/originals/1a/af/84/1aaf841ab77bd0a903e3fa2533a15302.jpg" alt="Buda" />
            <div>
                <strong>Marcus Zanini</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}