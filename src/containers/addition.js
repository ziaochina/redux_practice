import React from 'react'
import { connect } from 'react-redux'
import { additionAChange } from '../actions' 
import Addition from '../components/addition'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
    debugger
    return {
    ...state.reducer.addition
}}

const mapDispatchToProps = {
    onAChange: additionAChange,
    push
}

export default connect(mapStateToProps, mapDispatchToProps)(Addition)
