import React, {Component} from 'react'
import './ProdTile.css'

class ProdTile extends Component {
  render() {
    return (
      <div className="Productivity">
        <h3>Productivity</h3>
        <img
          src="https://www.internetmarketingninjas.com/blog/wp-content/uploads/2012/07/6-cool-productivity-charts-03-1.png"/>
        <p>This will be the space for the productivity data (score/chart). Image above
          is the current placeholder</p>
      </div>
    )
  }
}
export default ProdTile