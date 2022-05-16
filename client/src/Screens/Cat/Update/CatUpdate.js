import React from 'react';


import "../../css/Forms.css"
import {withRouter} from 'react-router-dom';

import Card from '../../../components/Card';
import FormGroup from '../../../components/FormGroup';
 class CatUpdate extends React.Component {

    state = {
        id: 0,
        name: '',
        age: 0,
        pelagem: 'DEFAULT'
    }

    save = () => {
        if (this.state.pelagem == "DEFAULT") {
            alert("Nescessário selecionar pelagem");
            return;
        }
        const data = {
            id: Number.parseInt(this.state.id),
            name: this.state.name,
            age: Number.parseInt(this.state.age),
            pelagem: this.state.pelagem
        }
        const rqstOpt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;application/json'
            },
            body: data
        }


        fetch("http://10.0.0.101:8080/api/cat/{id}", rqstOpt).then(
            console.log(data), alert("INFORMAÇÕES ALTERADAS COM SUCESSO!")
        ).catch(erro => console.log(erro))

        this.props.history.push("/");

    }
    handleChange(event) {


        this.setState({ pelagem: event.target.value });

    }
    render() {
        return (

            <div>
                <Card title="Alterar informações: Gato">
                    <form className="principal-form">
                        <FormGroup label="Id do Gato" htmlFor="id">
                            <input className='form-control' type="text" placeholder='id' id='id' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup label="Nome" htmlFor="name">
                            <input className='form-control' type="text" placeholder='nome' id='name' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup label="Idade" htmlFor="Idade">
                        <input className='form-control' type="text" placeholder='Idade' id='age' onChange={(e) => { this.setState({ age: e.target.value }) }} />
                        </FormGroup>
                        
                        
                        
                        <label class="form-label mt-4" htmlFor="formP">Tipo de pelagem</label>
                        <select id='formP' className='form-select' onChange={(event) => this.handleChange(event)}>
                            <option value="DEFAULT">Pelagem</option>
                            <option value="Frajola">Frajola</option>
                            <option value="Escaminha">Escaminha</option>
                            <option value="Tigrado">Tigrado</option>
                        </select>
                        <br/>
                        <button className="btn btn-secondary" onClick={this.save}>Alterar informações</button>
                    </form>
                </Card>
            </div>
        );
    }

}

export default CatUpdate;