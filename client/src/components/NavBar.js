import React from 'react';

import NavBarItem from './NavBarItem'

export default class NavBar extends React.Component {

    render() {
        return (


            <div className="bar" >
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">CatAdoption</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <NavBarItem href="/home" label="Home"/>

                                <NavBarItem href="/catregister" label="Registrar gato" />
                                <NavBarItem href="/catfeed" label="Pesquisar gato" />
                                <NavBarItem href="/catupdate" label="Atualizar gato"/>
                                <NavBarItem href="/catdelete" label="Deletar gato" />

                                <NavBarItem href="/personregister" label="Registrar pessoa" />
                                <NavBarItem href="/personupdate" label="Atualizar pessoa"/>
                                <NavBarItem href="/personfeed" label="Pesquisar pessoa" />
                                <NavBarItem href="/persondelete" label="Deletar pessoa" />
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}