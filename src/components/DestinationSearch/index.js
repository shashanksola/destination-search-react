// Write your code here

import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  inputValueUpdate = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            onChange={this.inputValueUpdate}
            value={searchInput}
            id="searchBar"
            placeholder="Filter Results"
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="output-locations">
          {destinationsList.map(eachItem => {
            if (
              eachItem.name.toUpperCase().includes(searchInput.toUpperCase())
            ) {
              return <DestinationItem key={eachItem.id} card={eachItem} />
            }
            return null
          })}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
