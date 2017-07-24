import React, {
  Component
} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './UserStats.css'

const history = createBrowserHistory()

class UserStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stats: null
    }
  }

  componentWillMount() {
    this.state.stats = this.props.stats
  }

  renderStat(stat) {
       return (
           <li key={stat.name} className="user-info__stat">
               <Link to={stat.url}>
                   <p className="user-info__stat-value">{stat.value}</p>
                   <p className="user-info__stat-name">{stat.name}</p>
               </Link>
           </li>
       )
   }

  render() {
    return (
      <ul className="user-info__stats">
        {this.state.stats.map(this.renderStat)}
      </ul>
    );
  }
}

export default UserStats
