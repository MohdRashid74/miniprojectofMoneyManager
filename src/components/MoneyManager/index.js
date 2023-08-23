import {Component} from 'react'

import './index.css'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="pargraph">
            Welcome back to your<span className="span"> Money Manager</span>
          </p>
        </div>
        <ul className="un-list">
          <MoneyDetails />
        </ul>
      </div>
    )
  }
}
export default MoneyManager
