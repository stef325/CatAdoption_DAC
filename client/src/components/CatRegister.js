import React from 'react';

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
        const data = {
            name: this.state.name,
            age: Number.parseInt(this.state.age),
            pelagem: this.state.pelagem
        }
        const rqstOpt = {
            method:'POST',
            headers:{'Content-Type' : 'application/x-www-form-urlencoded;application/json' 
        },
            body: data
        }
        
        
        fetch("http://10.0.0.101:8080/api/cat", rqstOpt).then(
            console.log(data)
            ).catch(erro=>console.log(erro))
        
    }
    handleChange(event) {
        
        
        this.setState({pelagem:event.target.value});

    }
    render() {
        return (
            
            <div className="RegisterConteiner">
                <h1>Adicionar Gato</h1>
                <form>
                    <input type="text" placeholder='nome' id='name' onChange={(e)=>{this.setState({name: e.target.value})}}/>
                    <input type="text" placeholder='Idade' id='age'onChange={(e)=>{this.setState({age: e.target.value})}}/>

                    <select onChange={(event)=>this.handleChange(event)}>
                        <option value="DEFAULT">Pelagem</option>
                        <option value="Frajola">Frajola</option>
                        <option value="Escaminha">Escaminha</option>
                        <option value="Tigrado">Tigrado</option>
                    </select>
                    <button onClick={this.save}>Cadastrar Gato</button>
                </form>
            </div>
        );
    }

}