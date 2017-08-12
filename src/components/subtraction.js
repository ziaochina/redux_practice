import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav'

const subtraction = ({ onAChange, onBChange,a, b, c, push  }) => (
    <div>
        <Nav push ={push}/>
        <span>减法：</span>
        <input onChange={onAChange} value={a} />
        -
        <input onChange={onBChange} value={b} />
        =
        <input value={c}/>
    </div>

)

export default subtraction
