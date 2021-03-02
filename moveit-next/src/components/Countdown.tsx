import { useState, useEffect, useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallengeCotext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallangesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(23 * 60);
    }

    useEffect(() => {//useEffect serve para dar um "efeito" quando algum valor é mudado
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
            //a cada 1 segundo o setTime é ativado
        }
        else if (time < 0) {
            setTime(0);
        } else if (isActive && time <= 0) {
            startNewChallenge();
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])// no caso aqui o active ou o time for mudado

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        { isActive ? ( //parenteses para quando for mais de uma linha de result
                            <button type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}>
                                    Iniciar ciclo
                                </button>

                            )}
                    </>
                )}



        </div>
    );
}