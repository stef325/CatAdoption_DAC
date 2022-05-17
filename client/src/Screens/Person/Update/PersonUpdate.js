import React from 'react';

import "../../css/Forms.css"
import {withRouter} from 'react-router-dom';

import Card from '../../../components/Card';
import FormGroup from '../../../components/FormGroup';

 class PersonUpdate extends React.Component {

    state = {
        id: 0,
        name: '',
        age:0,
        cpf:0
    }

    save =() =>{
        const data = {
            id: Number.parseInt(this.state.id),
            name: this.state.name,
            age: Number.parseInt(this.state.age),
            cpf:Number.parseInt(this.state.cpf)
        }
        const rqstOpt = {
            method:'POST',
            headers:{'Content-Type' : 'application/x-www-form-urlencoded;application/json' 
        },
            body: data
        }
        
        fetch("http://10.0.0.101:8080/api/person/{id}", rqstOpt).then(
            console.log(data), alert("INFORMAÇÕES ALTERADAS COM SUCESSO!")
            ).catch(erro=>console.log(erro));
        
        this.props.history.push("/home");
        
    }
    render() {
        return (


            <div>
                <Card title="Alterar informações: Pessoa">
                    <form className="principal-form">
                        <FormGroup label="Id da Pessoa" htmlFor="id">
                            <input className='form-control' type="text" placeholder='id' id='id' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup label="Nome" htmlFor="name">
                            <input className='form-control' type="text" placeholder='Nome' id='name' onChange={(e)=>{this.setState({name: e.target.value})}}/>
                        </FormGroup>

                        <FormGroup label="Idade" htmlFor="Idade">
                        <input className='form-control' type="text" placeholder='Idade' id='age' onChange={(e) => { this.setState({ age: e.target.value }) }} />
                        </FormGroup>
                        
                        <br/>
                        <button className="btn btn-secondary" onClick={this.save}>Alterar informações</button>
                    </form>
                </Card>
            </div>
        );
    }

}

export default PersonUpdate;