import React from 'react';

export default class CatRegister extends React.Component{

    render() {
        return (
            
            <div className="RegisterConteiner">
                <h1>Adicionar Gato</h1>
                <form>
                    <input type="text" placeholder='nome' id='name'/>
                    <input type="text" placeholder='Idade' id='age'/>
                    <select>
                        <option value="DEFAULT">Pelagem</option>
                        <option value="Frajola">Frajola</option>
                        <option value="Escaminha">Escaminha</option>
                        <option value="Tigrado">Tigrado</option>
                    </select>
                    <button>Cadastrar Gato</button>
                </form>
            </div>
        );
    }

}