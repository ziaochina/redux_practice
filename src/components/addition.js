import React from 'react'
import PropTypes from 'prop-types'

const addition = ({ onAChange, onBChange, a, b, c }) => (
    <div>
        <input onChange={onAChange} value={a} />
        +
        <input onChange={onBChange} value={b} />
        =
        <input value={c} />
    </div>

)

export default addition
