import React from "react";
import styled from 'styled-components';

const Init = styled.div`
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    height: 50vh;
`

export default class HomePage extends React.Component{
    state= {
        msg: `Welcome to Paula's Page`
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({msg: 'Entrou na minha Página'})
        }, 5000)
    }

    componentDidUpdate(){
        if(this.state.msg ===`Entrou na minha Página`){
            document.title = 'Precisa de Ajuda? - HOME'
        }
    }

    render(){
        return(
            <Init>
                <h1>{this.state.msg}</h1>
            </Init>
        )
    }
}
