import React from 'react';


import "../../css/Feeds.css"

import Card from '../../../components/Card';
export default class CatFeed extends React.Component {

    state = {
        param:'',
        filter:''
    }

    search = () => {
        const data = {
            param: this.state.param,
            filter: this.state.filter
        }

        console.log(data)
        alert(data)
    }
    handleChange(event) {


        this.setState({ filter: event.target.value });

    }
    cat = {
        first:{
            name:"lulu",
            age: 3,
            pelagem: "Frajola"
        },
        sec:{
            name:"nina",
            age: 2,
            pelagem: "Frajola"
        },
        trd:{
            name:"nino",
            age: 5,
            pelagem: "Frajola"
        }
    }

   

    render() {
        return (

            <div>
                <Card title="Pesquisar">
                    <label className="form-label mt-4" htmlFor="search">Pesquisar por:{
                    <select className="form-select" onChange={(event) => this.handleChange(event)}>
                        <option value="DEFAULT">Filtro</option>
                        <option value="Pelagem">Pelagem</option>
                        <option value="Idade">Idade</option>
                    </select>}</label>
                    <form className="d-flex">
                    
                        <input id="search" className="form-control me-sm-2" type="text" placeholder="Pesquisar" onChange={(e)=>{this.setState({param: e.target.value})}}/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.search}>Pesquisar</button>
                    </form>
                    <br/>
                    <div className="progress">
                        <div className="progress-bar bg-success progress-bar-feed" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                    <div className='grid-main'>
                        <Card title={this.cat.first.name}>
                            <h5>Idade: {this.cat.first.age}</h5>
                            <h5>Pelagem: {this.cat.first.pelagem}</h5>
                        </Card>
                        <Card title={this.cat.sec.name}>
                            <h5>Idade: {this.cat.sec.age}</h5>
                            <h5>Pelagem: {this.cat.sec.pelagem}</h5>
                        </Card>
                        <Card title={this.cat.trd.name}>
                            <h5>Idade: {this.cat.trd.age}</h5>
                            <h5>Pelagem: {this.cat.trd.pelagem}</h5>
                        </Card>
                    </div>
                    
                </Card>
            </div>
        );
    }

}