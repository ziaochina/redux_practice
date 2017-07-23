import React from 'react'
import { connect } from 'react-redux'
import { subtractionAChange } from '../actions'
import Subtraction from '../components/subtraction'

const mapStateToProps = (state) => ({
  ...state.subtraction
})

const mapDispatchToProps = {
  onAChange: subtractionAChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Subtraction)
