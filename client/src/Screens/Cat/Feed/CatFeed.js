import React from 'react';
import axios from 'axios';

import "../../css/Feeds.css"
import "bootswatch/dist/vapor/bootstrap.css"

import FormGroup from '../../../components/FormGroup';
import CatTable from '../../../components/CatTable'

export default class CatFeed extends React.Component {

    state = {
        id: '',
        name:'',
        age:'',
        pelagem:'',
        cats:[]
    }

    
    delete = (catId)=>{
        axios.delete(`http://localhost:8080/api/cat/${catId}`)
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
        this.props.history.push("/catupdate");
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

        if (this.state.pelagem != '') {
            if (params != "?") {
                params = `${params}&`;
            }
            params = `${params}pelagem=${this.state.pelagem}`
        }
        await axios.get(`http://localhost:8080/api/cat${params}`)
        .then(response=>{
            const cats = response.data;
            this.setState({cats});
            console.log(cats);

        }).catch(error=>{
            console.log(error.response)
        }
            
        )

    }
    handleChange(event) {


        this.setState({ pelagem: event.target.value });

    }
    
    render() {
        return (
            

            <div className='principal-catFeed'>
                <div className="p-search">
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='bs-component'>
                                <FormGroup label="Id do Gato" htmlFor="id">
                                    <input className='form-control' type="text" placeholder='id' value={this.state.id} id='id' onChange={(e) => { this.setState({ id: e.target.value }) }} />
                                </FormGroup>

                                <FormGroup label="Nome" htmlFor="name">
                                    <input className='form-control' type="text" placeholder='nome' value={this.state.name} id='name' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                </FormGroup>

                                <FormGroup label="Idade" htmlFor="Idade">
                                    <input className='form-control' type="text" placeholder='Idade' value={this.state.age} id='age' onChange={(e) => { this.setState({ age: e.target.value }) }} />
                                </FormGroup>

                                <label className="form-label mt-4" htmlFor="formP">Tipo de pelagem</label>
                                <select id='formP' className='form-select' onChange={(event) => this.handleChange(event)}>
                                    <option value="">Pelagem</option>
                                    <option value="Frajola">Frajola</option>
                                    <option value="Escaminha">Escaminha</option>
                                    <option value="Tigrado">Tigrado</option>
                                </select>
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
                                <CatTable cats={this.state.cats} delete={this.delete} edit={this.edit}></CatTable>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}