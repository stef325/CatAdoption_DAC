import React from 'react';

import NavBarItem from './NavBarItem'

export default class NavBar extends React.Component {

    render() {
        return (


            <div className="bar" >
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">CatAdoption</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto">
                                <NavBarItem href="/" label="Home"/>
                                <NavBarItem href="/personupdate" label="Atualizar pessoa"/>
                                <NavBarItem href="/personfeed" label="Pesquisar pessoa" />
                                <NavBarItem href="/catupdate" label="Atualizar gato"/>
                                <NavBarItem href="/catfeed" label="Pesquisar gato" />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}