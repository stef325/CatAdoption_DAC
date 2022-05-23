import React from 'react';
import axios from 'axios';

import Card from '../../../components/Card';

import FormGroup from '../../../components/FormGroup';
export default class CatRegister extends React.Component{

    state = {
        name: '',
        age:0,
        pelagem:'DEFAULT'
    }

    save =() =>{
        if (this.state.pelagem == "DEFAULT") {
            alert("Nescessário selecionar pelagem");
            return;
        }
        
        this.create()
        
    }
    create = async () =>{
        await axios.post("http://localhost:8080/api/cat", 
        { 
            name: this.state.name,
            age: Number.parseInt(this.state.age),
            pelagem: this.state.pelagem
        }
        ).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error.response)
        }
            
        )

    }
    handleChange(event) {
        
        
        this.setState({pelagem:event.target.value});

    }
    render() {
        return (
            
            <div className="RegisterConteiner">
                <Card title="Cadastrar: Gato">
                    <form className="principal-form">

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
                        <button className="btn btn-secondary" onClick={this.save}>Cadastrar Gato</button>
                    </form>
                </Card>
            </div>
        );
    }

}