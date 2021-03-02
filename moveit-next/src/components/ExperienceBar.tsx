import { useState } from "react"; //importação para a função do useState
import styles from '../styles/components/ExperienceBar.module.css';
interface LevelProps { //metodo de "input" para usar dentro da função
    nivel: number;
}

var test = 0;

export function BotaoLevel(props: LevelProps) {
    const [contador, setContador] = useState(1); //useState  F para usar uma forma de contado
    function increment() {
        if (contador < 100)
            setContador(contador + 10);
        else
            setContador(100);
        //setContador é uma função declarada na const acima para usar como uma variavel auxiliar
        //na hora de passar para o codigo, porem na hora do codigo deve-se usar o valor inicial (contador)
        test = contador;
        console.log(test);
    }

    return (
        <div>
            <button
                type="button"
                onClick={increment}
            > <strong>{contador}</strong>
            </button>
        </div>
    );
}

export function ExperienceBar() {

    return (
        //No TypeScript a nomeclatura de class é diferente, usamos className ao inves de class
        <div>
            <header className={styles.experienceBar}>
                <span> 0 xp</span>
                <div>
                    <div style={{ width: test + '%' }} />
                    <span className={styles.currentExperience} style={{ left: test + '%' }}>
                        {test * 6}xp
                </span>
                </div>
                <span>600 xp</span>
            </header>

        </div>

    );
}