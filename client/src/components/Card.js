import React from 'react';

export default class Card extends React.Component{

    render() {
        return (
            
            
            <div className="card border-secondary mb-3" id="conteiner">
                <h4 className="card-header">{this.props.title}</h4>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }

}