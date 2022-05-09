import React from 'react';

export default class CatRegister extends React.Component{

    state = {
        name: '',
        age:0,
        pelagem:''
    }

    save =() =>{
        const data = {
            name: this.state.name,
            age: Number.parseInt(this.state.age),
            pelagem: ()=> {
                if(this.state.pelagem=="DEFAULT"){
                    
                }

            }
        }
        const rqstOpt = {
            method:'POST',
            headers:{'Content-Type' : 'application/x-www-form-urlencoded;application/json' 
        },
            body: data
        }
        
        fetch("http://10.0.0.101:8080/api/cat", rqstOpt).then(
            console.log(data), alert()
            ).catch(erro=>console.log(erro), alert())
        
    }

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