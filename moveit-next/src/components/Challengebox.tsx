import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallengeCotext';
import style from '../styles/components/Challengebox.module.css';

export function Challengebox() {
    const contextData = useContext(ChallangesContext);
    console.log(contextData);

    const hasActiveChallenge = true;

    return (
        <div className={style.challengeboxContainer}>
            {hasActiveChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" alt="" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça 10 flexões</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={style.challengeFailedButton}
                        > Falhei
                    </button>
                        <button
                            type="button"
                            className={style.challengeSuccededButton}
                        > Completei
                    </button>

                    </footer>

                </div>

            ) : (
                    <div className={style.challengeNotActive}>
                        <strong>Finalize um ciclo para recer um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level UP" />
                    Avance de level completando desafios.
                    </p>
                    </div>
                )}


        </div>

    );
}