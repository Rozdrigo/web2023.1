import React from "react";
import './MeusDados.css';

export function NormalFunctionComponentMeusDados01(){
    return(
        <div className="eu-card-component">
            <h1>Nome: Rodrigo Silva Coelho</h1>
            <h1>Curso: Sistemas de Informação</h1>
            <h1>Universidade: UFC - Universidade Federal do Ceará</h1>
        </div>
    )
}

export const ArrowFunctionComponentMeusDados01 = () => (
    <div className="eu-card-component">
        <h1>Nome: Rodrigo Silva Coelho</h1>
        <h1>Curso: Sistemas de Informação</h1>
        <h1>Universidade: UFC - Universidade Federal do Ceará</h1>
    </div>
);

export const AnonimalFunctionComponentMeusDados01 = () => (
    <div className="eu-card-component">
        <h1>Nome: Rodrigo Silva Coelho</h1>
        <h1>Curso: Sistemas de Informação</h1>
        <h1>Universidade: UFC - Universidade Federal do Ceará</h1>
    </div>
)

export class ClassComponentMeusDados01 extends React.Component{
    render(){
        return (
            <div className="eu-card-component">
                <h1>Nome: Rodrigo Silva Coelho</h1>
                <h1>Curso: Sistemas de Informação</h1>
                <h1>Universidade: UFC - Universidade Federal do Ceará</h1>
            </div>
        )
    }
}