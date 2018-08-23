import React, { Component } from 'react';

export default class ClassCompoment extends Component {
    
    constructor(props){
        super(props),
        this.state = { value: props.initialValue }
    };

    sum(delta){
        this.setState({ value: this.state.value + delta })
    };

    render(){
        return(
            <div>
                <h4>{this.props.label}</h4>
                <h4>{this.state.value}</h4>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        );
    };
};