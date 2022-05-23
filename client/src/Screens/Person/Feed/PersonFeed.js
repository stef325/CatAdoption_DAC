import React from 'react';
import axios from 'axios';

import "../../css/Feeds.css"
import "bootswatch/dist/vapor/bootstrap.css"

import FormGroup from '../../../components/FormGroup';
import PersonTable from '../../../components/PersonTable'

export default class PersonFeed extends React.Component {

    state = {
        id: '',
        name:'',
        age:'',
        people:[]
    }

    
    delete = (personId)=>{
        axios.delete(`http://localhost:8080/api/person/${personId}`)
        .then(response =>
            {
                this.find()
            }
        ).catch(error =>
            {
                console.log(error.response)
            }
        )
    }
    edit = (catId) =>{
        this.props.history.push("/personupdate");
    }

    find = async () =>{
        let params = "?";

        if (this.state.id != '') {
            if (params != "?") {
                params = `${params}&`;
            }
            params = `${params}id=${this.state.id}`
        }

        if (this.state.name != '') {
            if (params != "?") {
                params = `${params}&`;
            }
            params = `${params}name=${this.state.name}`
        }

        if (this.state.age != '') {
            if (params != "?") {
                params = `${params}&`;
            }
            params = `${params}age=${this.state.age}`
        }

      

        await axios.get(`http://localhost:8080/api/person${params}`)
        .then(response=>{
            const people = response.data;
            this.setState({people});
            console.log(people);

        }).catch(error=>{
            console.log(error.response)
        }
            
        )

    }
    
    render() {
        return (
            

            <div className='principal-catFeed'>
                <div className="p-search">
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='bs-component'>
                                <FormGroup label="Id da Pessoa" htmlFor="id">
                                    <input className='form-control' type="text" placeholder='id' value={this.state.id} id='id' onChange={(e) => { this.setState({ id: e.target.value }) }} />
                                </FormGroup>

                                <FormGroup label="Nome" htmlFor="name">
                                    <input className='form-control' type="text" placeholder='nome' value={this.state.name} id='name' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                </FormGroup>

                                <FormGroup label="Idade" htmlFor="Idade">
                                    <input className='form-control' type="text" placeholder='Idade' value={this.state.age} id='age' onChange={(e) => { this.setState({ age: e.target.value }) }} />
                                </FormGroup>

                                <br/>
                                <button className="btn btn-primary" type='button' onClick={this.find}>Buscar</button>
                                

                            </div>
                        </div>

                    </div>
                    <br/>
                    <div className="progress">
                        <div className="progress-bar bg-success progress-bar-feed" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='bs-component'>
                                <PersonTable people={this.state.people} delete={this.delete} edit={this.edit}></PersonTable>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}