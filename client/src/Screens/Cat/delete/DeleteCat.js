import React from 'react';
import axios from 'axios';

import "../../css/Forms.css"

import Card from '../../../components/Card';
import FormGroup from '../../../components/FormGroup';

export default  class DeleteCat extends React.Component {

    state = {
        id: 0
    }

    delete = ()=>{
        axios.delete(`http://localhost:8080/api/cat/${this.state.id}`)
        .then(response =>
            {
                alert("deletado!")
            }
        ).catch(error =>
            {
                console.log(error.response)
            }
        )
    }

    handleChange(event) {


        this.setState({ pelagem: event.target.value });

    }
    render() {
        return (

            <div>
                <Card title="Deletar: Gato">
                    <form className="principal-form">
                        <FormGroup label="Id do Gato" htmlFor="id">
                            <input className='form-control' type="text" placeholder='id' id='id' onChange={(e) => { this.setState({ id: e.target.value }) }} />
                        </FormGroup>
                        <button className="btn btn-secondary" onClick={this.delete}>Deletar</button>
                    </form>
                </Card>
            </div>
        );
    }

}

