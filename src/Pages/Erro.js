import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 2px solid yellow;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
background-color: red;
height: 100vh;
`

const Titulo = styled.h1`
font-size: 5rem;
color: blue;
`

const Page = styled.p`
font-size: 3rem;
`
export default class Erro extends React.Component{
    render(){
        return(
            <Div>
                <Titulo>404</Titulo>
                <Page>Page Not Found</Page>
            </Div>
        )
    }
}