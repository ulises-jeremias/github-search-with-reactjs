import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import './Stats.css'

class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stats: null
    }
  }

  componentWillMount() {
    this.setState({
      stats: this.props.stats
    })
  }

  renderStat(stat) {
       return (
           <li key={stat.name} className="user-info-stat">
               <Link to={stat.url}>
                   <p className="user-info-stat-value">{stat.value}</p>
                   <p className="user-info-stat-name">{stat.name}</p>
               </Link>
           </li>
       )
   }

  render() {
    return (
      <ul className="user-info-stats">
        {this.state.stats.map(this.renderStat)}
      </ul>
    )
  }
}

export default Stats
