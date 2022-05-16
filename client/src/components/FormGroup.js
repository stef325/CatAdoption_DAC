import React from 'react';

export default class FormGroup extends React.Component{

    render() {
        return (
            
            <div className="form-group">
                <label class="form-label mt-4" htmlFor={this.props.htmlFor}>{this.props.label}</label>
                {this.props.children}
            </div>
        );
    }

}