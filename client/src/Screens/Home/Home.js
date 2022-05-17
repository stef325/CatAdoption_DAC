import React from 'react';

import "../../Screens/css/Feeds.css"

export default class Home extends React.Component {


    render() {
        return (

            <div>
                <div className="title">
                    <h1 className="principal-title">CatAdoption</h1>
                </div>

                <div className="gridaa">
                    <div className="card text-white bg-primary mb-3 ">
                        <div className="card-header">Descrição</div>
                        <div className="card-body">
                            <h4 className="card-title">CatAdoption</h4>
                            <p className="card-text">Este projeto foi desenvolvido como atividade para a disciplina de Desenvolvimento de Aplicações Coorporativas do Professor Elensilson Vieira, no curso de Análise e Desenvolvimento de Sistemas do IFPB Campus Monteiro</p>
                        </div>
                    </div>

                    <div className="card border-dark mb-3" >
                        <div className="card-header">Tema</div>
                        <div className="card-body">
                            <h4 className="card-title">Adoção de gatos</h4>
                            <p className="card-text">O principal tema desse projeto é montar um sistema para cadastro e adoção de gatos</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}