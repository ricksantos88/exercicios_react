import React, { Component } from 'react';

export default class ClassCompoment extends Component {
    render(){
        return(
            <h1>{ this.props.value }</h1>
        )
    }
};