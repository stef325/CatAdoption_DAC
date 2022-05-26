import React from 'react'
import axios from 'axios';


import Card from '../../../components/Card';
import FormGroup from '../../../components/FormGroup';
export default class PersonRegister extends React.Component{

    state = {
        name: '',
        age:0,
        cpf:0
    }

    save = async () =>{
        await axios.post("http://localhost:8080/api/person", 
        { 
            name: this.state.name,
            age: Number.parseInt(this.state.age),
            cpf: this.state.cpf
        }
        ).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error.response)
        }
            
        )

    }
    render() {
        return (
            
            <div className="RegisterConteiner">
                <Card title="Cadastrar: Pessoa">
                    <form className="principal-form">

                        <FormGroup label="Nome" htmlFor="name">
                            <input className='form-control' type="text" placeholder='Nome' id='name' onChange={(e)=>{this.setState({name: e.target.value})}}/>
                        </FormGroup>

                        <FormGroup label="Idade" htmlFor="Idade">
                        <input className='form-control' type="text" placeholder='Idade' id='age' onChange={(e) => { this.setState({ age: e.target.value }) }} />
                        </FormGroup>
                        
                        <br/>
                        <button className="btn btn-secondary" onClick={this.save}>Cadastrar Pessoa</button>
                    </form>
                </Card>
            </div>
        );
    }

}