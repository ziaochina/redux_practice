import React from 'react'
import { connect } from 'react-redux'
import { additionAChange } from '../actions' 
import Addition from '../components/addition'

const mapStateToProps = (state) => ({
    ...state.addition
})

const mapDispatchToProps = {
    onAChange: additionAChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Addition)
