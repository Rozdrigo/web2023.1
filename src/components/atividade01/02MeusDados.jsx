import React from "react";
import './MeusDados.css';

export function PropsNormalFunctionComponentMeusDados01(props){
    const {nome, curso, universidade} = props;
    return(
        <div className="eu-card-component">
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {universidade}</h1>
        </div>
    )
}

export const PropsArrowFunctionComponentMeusDados01 = (props) => {
    const {nome, curso, universidade} = props;
    return (
    <div className="eu-card-component">
        <h1>Nome: {nome}</h1>
        <h1>Curso: {curso}</h1>
        <h1>Universidade: {universidade}</h1>
    </div>
);
}
export const PropsAnonimalFunctionComponentMeusDados01 = (props) => {
    const {nome, curso, universidade} = props;
    return (
    <div className="eu-card-component">
        <h1>Nome: {nome}</h1>
        <h1>Curso: {curso}</h1>
        <h1>Universidade: {universidade}</h1>
    </div>
)}

export class PropsClassComponentMeusDados01 extends React.Component{
    render(){
        const {nome, curso, universidade} = this.props;
        return (
            <div className="eu-card-component">
                <h1>Nome: {nome}</h1>
                <h1>Curso: {curso}</h1>
                <h1>Universidade: {universidade}</h1>
            </div>
        )
    }
}