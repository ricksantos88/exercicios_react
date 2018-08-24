import React from 'react';
import ReactDOM from 'react-dom';
//import Component from './component'
//import Primeiro, { Segundo } from './component2'
//import SilvaFamily from './ex.family/silvaFamily'
//import Family from './ex.family/family'
//import Member from './ex.family/member'
import ClassComponent from '../ex/classes/classComponent';
import Field from '../ex/classes2/Field'

/*
ReactDOM.render(<Component value="Show!" />
    , document.getElementById('app')
);
*/

/*
ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app')
);
*/

/*
ReactDOM.render(
    <SilvaFamily />
    , document.getElementById('app')
);
*/

/*
ReactDOM.render(
    <Family lastName='Santos'>
        <Member name='Wendel'/>
        <Member name='Paula '/>
    </Family>
    , document.getElementById('app')
);
*/
/*
ReactDOM.render(
    <ClassComponent label='Contador' initialValue={10} />
    , document.getElementById('app')
);
*/

ReactDOM.render(
    <Field  initialValue='Teste' />
    , document.getElementById('app')
);