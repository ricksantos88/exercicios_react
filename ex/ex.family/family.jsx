import React from 'react';
import { childrenWithProps } from '../../utils/reactUtils'

export default (props) => (
    <div>
        <h5>Membro da Familia</h5>
        { childrenWithProps(props.children, props) }
    </div>
)