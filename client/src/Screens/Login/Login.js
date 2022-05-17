import React from 'react';

import {withRouter} from 'react-router-dom';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
export default class Login extends React.Component {

    state = {
        name: '',
        password: 0
    }

    login = () => {
        const data = {
            name: this.state.name,
            password: Number.parseInt(this.state.password)
        }
        if (data.name == "monteiro@ifpb.edu.br" && data.password =="123") {
            alert("Login efetuado com sucesso");
            this.props.history.push("/home");
        }
        else{
            alert("Login inválido")
        }
        console.log(data);
        
    }
    render() {
        return (

            <div>
                <Card title="Login">
                    <form className="principal-form">
                        <FormGroup label="Nome" htmlFor="name">
                            <input className='form-control' type="text" placeholder='Nome' id='name' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup label="Senha" htmlFor="password">
                            <input className='form-control' type="password" placeholder='Senha' id='password' onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </FormGroup>
                        <br/>
                        <button className="btn btn-outline-primary" onClick={this.login}>Login</button>
                    </form>
                    
                </Card>
            </div>
        );
    }

}