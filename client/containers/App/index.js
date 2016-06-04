
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as CostActions from '../../actions/cost'
import style from './style.css'

class App extends Component {
  render() {
    const { cost, actions, children } = this.props
    return (
      <div className={style.normal}>
        <Header />
        <MainSection cost={cost} actions={actions} />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cost: state.cost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CostActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
