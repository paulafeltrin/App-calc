import React, { useState } from "react";
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    margin: 10px 0;
    border-radius: 5px;
`
const Btn = styled.button`
    margin: 2vh 1.5vw;
    border-radius: 5px;
    cursor: pointer;

    :active{
        background-color: red;
    }
`
export default function Calculator() {
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [resultado, setResultado] = useState();

    const Clear = () => {
        setInput1("");
        setInput2("");
        setResultado("")
      }

    const Soma = () => {
        setResultado(input1 + input2);
        setInput1("");
        setInput2("");
    }

    const Decr = () => {
        setResultado(input1 - input2);
        setInput1("");
        setInput2("");
    }

    const Mult = () => {
        setResultado(input1 * input2);
        setInput1("");
        setInput2("");
    }

    const Divi = () => {
        setResultado(input1 / input2);
        setInput1("");
        setInput2("");
    }
  return (
    <Div>
        <h1>Calculator</h1>
        <Input placeholder="Digite um número" value={input1} type="number" onChange={(e) => {setInput1(Number(e.target.value))}}/>
        <Input placeholder="Digite um número" value={input2} type="number" onChange={(e) => {setInput2(Number(e.target.value))}}/>
        <div>
            <Btn onClick={() => {Clear()}}>CLEAR</Btn>
            <Btn onClick={() => {Soma()}}>SOMA</Btn>
            <Btn onClick={() => {Decr()}}>SUBTRAÇÃO</Btn>
            <Btn onClick={() => {Mult()}}>MULTI</Btn>
            <Btn onClick={() => {Divi()}}>DIVIDIR</Btn>
        </div>
        <h2>{resultado}</h2>
    </Div>
  );
}

{/* <button onClick={() => {setResultado(input1 + input2)}}>+</button>
<button onClick={() => {setResultado(input1 - input2)}}>-</button>
<button onClick={() => {setResultado(input1 * input2)}}>x</button>
<button onClick={() => {setResultado(input1 / input2)}}>/</button> */}