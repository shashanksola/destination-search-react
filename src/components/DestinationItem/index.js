// Write your code here
import './index.css'

import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {card} = this.props
    const {name, imgUrl} = card
    return (
      <li>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem
