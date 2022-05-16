import React from 'react'

export default class PersonRegister extends React.Component{

    state = {
        name: '',
        age:0,
        cpf:0
    }

    save =() =>{
        const data = {
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
        
        fetch("http://10.0.0.101:8080/api/person", rqstOpt).then(
            console.log(data), alert()
            ).catch(erro=>console.log(erro))
        
    }
    render() {
        return (
            
            <div className="RegisterConteiner">
                <h1>Cadastrar Pessoa</h1>
                <form onSubmit={()=>{this.save()}}>
                    <input type="text" placeholder='Nome' id='name' onChange={(e)=>{this.setState({name: e.target.value})}}/>
                    <input type="text" placeholder='Idade' id='age' onChange={(e)=>{this.setState({age: e.target.value})}}/>
                    <input type="text" placeholder='CPF' id='cpf' onChange={(e)=>{this.setState({cpf: e.target.value})}}/>
                    
                    <button>Cadastrar Pessoa</button>
                </form>
            </div>
        );
    }

}