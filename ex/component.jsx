import React from 'react';

//expondo atributos com ES2015.
/*
export default (props) => {
    return <h1>{props.value}</h1>
}
*/

const Primeiro = (props) => {
    return <h1>Primeiro Componente</h1>
};

const Segundo = (props) => {
    return <h1>Segundo Componente</h1>
};

export { Primeiro, Segundo };