import React from 'react';
import axios from 'axios';

import "../../css/Forms.css"

import Card from '../../../components/Card';
import FormGroup from '../../../components/FormGroup';

export default  class CatUpdate extends React.Component {

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
        
        this.update()

    }
    update = async () =>{
        await axios.put(`http://localhost:8080/api/cat/${this.state.id}`, 
        { 
            name: this.state.name,
            age: Number.parseInt(this.state.age),
            pelagem: this.state.pelagem
        }
        ).then(response=>{
            console.log(response)
            alert(response)
        }).catch(error=>{
            console.log(error.response)
            alert(error.response)
        }
            
        )

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
                            <input className='form-control' type="text" placeholder='id' id='id' onChange={(e) => { this.setState({ id: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup label="Nome" htmlFor="name">
                            <input className='form-control' type="text" placeholder='nome' id='name' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup label="Idade" htmlFor="Idade">
                        <input className='form-control' type="text" placeholder='Idade' id='age' onChange={(e) => { this.setState({ age: e.target.value }) }} />
                        </FormGroup>
                        
                        
                        
                        <label className="form-label mt-4" htmlFor="formP">Tipo de pelagem</label>
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

