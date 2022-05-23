import React from 'react';
import axios from 'axios';

import "../../css/Forms.css"

import Card from '../../../components/Card';
import FormGroup from '../../../components/FormGroup';

 class PersonUpdate extends React.Component {

    state = {
        id: 0,
        name: '',
        age:0
    }

    update = async () =>{
        await axios.put(`http://localhost:8080/api/person/${this.state.id}`, 
        { 
            name: this.state.name,
            age: Number.parseInt(this.state.age)
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
    render() {
        return (


            <div>
                <Card title="Alterar informações: Pessoa">
                    <form className="principal-form">
                        <FormGroup label="Id da Pessoa" htmlFor="id">
                            <input className='form-control' type="text" placeholder='id' id='id' onChange={(e) => { this.setState({ id: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup label="Nome" htmlFor="name">
                            <input className='form-control' type="text" placeholder='Nome' id='name' onChange={(e)=>{this.setState({name: e.target.value})}}/>
                        </FormGroup>

                        <FormGroup label="Idade" htmlFor="Idade">
                        <input className='form-control' type="text" placeholder='Idade' id='age' onChange={(e) => { this.setState({ age: e.target.value }) }} />
                        </FormGroup>
                        
                        <br/>
                        <button className="btn btn-secondary" onClick={this.update}>Alterar informações</button>
                    </form>
                </Card>
            </div>
        );
    }

}

export default PersonUpdate;