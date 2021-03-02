import { useState } from "react"; //importação para a função do useState

export function ExperienceBar() {
    const [contador, setContador] = useState(0); //useState  F para usar uma forma de contado

    function increment() {
        if (contador < 100)
            setContador(contador + 10);
        //setContador é uma função declarada na const acima para usar como uma variavel auxiliar
        //na hora de passar para o codigo, porem na hora do codigo deve-se usar o valor inicial (contador)
    }
    return (
        //No TypeScript a nomeclatura de class é diferente, usamos className ao inves de class
        <div>
            <header className="experience-bar">
                <span> 0 xp</span>
                <div>
                    <div style={{ width: contador + '%' }} />
                    <span className="current-experience" style={{ left: contador + '%' }}>
                        {contador * 6}xp
                </span>
                </div>
                <span>600 xp</span>
            </header>

            <div>
                <button
                    type="button"
                    onClick={increment}
                > <strong>{contador}</strong>
                </button>
            </div>

        </div>

    );
}