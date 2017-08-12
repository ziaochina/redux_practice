import React from 'react'
import PropTypes from 'prop-types'

import { push } from 'react-router-redux'

const Nav = ({push}) => (
    <div>
        <button onClick={()=>push('./additon')}>加法</button>
        <button onClick={()=>push('./subtraction')}>减法</button>
    </div>

)

export default Nav
