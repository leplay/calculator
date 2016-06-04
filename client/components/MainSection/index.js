
import React, { Component } from 'react'
import _ from 'lodash'
import { config, currency } from '../../constants/config'
import style from './style.css'

let VALUE = {}
_.each(config, function(item) {
  VALUE[item] = ''
})

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = VALUE
  }

  handleChange(key, event) {
    let value = event.target.value;
    let obj = {
      key: key,
      value: value
    };
    let newState = this.state
    newState[key] = value
    this.setState(newState)
    this.props.actions.change(obj)
  }

  render() {
    const { cost, actions } = this.props
    return (
      <section className={style.main}>
        <ul className={style.normal}>
          {config.map(item =>
            <li key={item.name}>
              <span className={style.name}>{item.name}</span>
              <select className={style.select} onChange={this.handleChange.bind(this, item.name)}>
                <option value="0">Choose</option>
              {Object.keys(item.options).map(key =>
                <option key={key} value={item.options[key]}>{key}</option>
              )}
              </select>
              <span className={style.value}>{this.state[item.name]}</span>
            </li>
          )}
        </ul>
        <h2 className={style.sum}><span className={style.currency} title={currency.name}>{currency.character}</span>{cost}</h2>
      </section>
    )
  }
}

export default MainSection
