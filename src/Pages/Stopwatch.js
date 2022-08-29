import React, {useState} from "react";
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const H1 = styled.h1`
    font-size: 1.4rem;
`

const H2 = styled.h1`
    font-size: 1.2rem;
`
const Button = styled.button`
    border-radius: 5px;
    width: 100px;
    cursor: pointer;

    :active{
        background-color: lightcyan;
    }

`
export default function Stopwatch() {
    const [n, setN] = useState(0);

    const Add = () => {
        setN(prevState => prevState + 1);
    }
    const Decr = () => {
        setN(num => num - 1);
    }
  return (
    <Div>
        <H1>Stopwatch</H1>
        <H2>{n}</H2>
        <div>
            <Button onClick={ () =>{Add()}}> + </Button>
            <Button onClick={() =>{Decr()}}>-</Button>
        </div>
    </Div>
  );
}
