import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav'

const addition = ({ onAChange, onBChange, a, b, c, push }) => (
    <div>
        <Nav push={push}/>
        <span> 加法：</span>
        <input onChange={onAChange} value={a} />
        +
        <input onChange={onBChange} value={b} />
        =
        <input value={c} />
    </div>

)

export default addition
