import React from 'react';


import "../../css/Feeds.css"

import Card from '../../../components/Card';
export default class PersonFeed extends React.Component {

    state = {
        param:'',
    }

    search = () => {
        const data = {
            param: this.state.param
        }

        console.log(data)
        alert(data)
    }
    person = {
        first:{
            name:"João",
            age: 19
        }
    }

    render() {
        return (

            <div>
                <Card title="Pesquisar">
                    <label className="form-label mt-4" htmlFor="search">Pesquisar</label>
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
                        <Card title={this.person.first.name}>
                            <h5>Idade: {this.person.first.age}</h5>
                        </Card>
                    </div>
                    
                </Card>
            </div>
        );
    }

}