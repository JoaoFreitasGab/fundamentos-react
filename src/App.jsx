import './App.css'
import React from 'react';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';


export default function App(props) {
    return (
        <div className="App">
            <strong><h1>Fundamentos React</h1></strong>

            <div className="Cards">


                <Card titulo="# 5 - Componente com Filhos">
                    <Familia sobrenome="Camargo" />
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome='Vera' />
                    <FamiliaMembro nome='José' />
                </Card>

                <Card titulo="# 4- Desafio Aleatório" color="#eefdee">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="# 3- Fragmento" color="#c3ffc3">
                    <Fragmento />
                </Card>

                <Card titulo="# 2- Com Parâmetro " color="#b3eeb3">
                    <ComParametro
                        titulo='Situação aluno'
                        aluno='João'
                        nota={9.3}
                    />
                </Card>

                <Card titulo="# 1- Primeiro" color="#99ce99">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>


    )
}