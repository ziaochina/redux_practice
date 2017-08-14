import React from 'react'
import { connect } from 'react-redux'
import { subtractionAChange } from '../actions'
import Subtraction from '../components/subtraction'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => ({
  ...state.reducer.subtraction
})

const mapDispatchToProps = {
  onAChange: subtractionAChange,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(Subtraction)
