import { useState } from "react"; //importação para a função do useState

interface Buttonprops { //metodo de "input" para usar dentro da função
    color: string;
    children: string; //children é o conteudo que se passa no meio do <Button> CHILDREN </Button>
}

export function Button(props: Buttonprops) {
    const [contador, setContador] = useState(1); //useState  F para usar uma forma de contado

    function increment() {
        setContador(contador + 1);
        //setContador é uma função declarada na const acima para usar como uma variavel auxiliar
        //na hora de passar para o codigo, porem na hora do codigo deve-se usar o valor inicial (contador)
    }

    return (
        <button
            type="button"
            style={{ backgroundColor: props.color, borderColor: props.color }}
            onClick={increment}
        > {props.children} <strong>{contador}</strong>
        </button>
    );
}