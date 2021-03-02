import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface ChallengesContextData {

    level: number,
    levelUp: () => void,
    currentExperience: number,
    challengesCompleted: number,
    startNewChallenge: () => void
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallangesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    //começa com null pois é um objeto
    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    return (

        //o value abaixo passa os valores que podem ser usados
        //em todas as pages, um exemplo disso seria como se fosse
        //uma variavel global, porem dentro desse value eu consigo passar:
        //funções, objetos, variaveis, etc...
        <ChallangesContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengesCompleted,
                startNewChallenge
            }}>
            {children}
        </ChallangesContext.Provider>
    );
}