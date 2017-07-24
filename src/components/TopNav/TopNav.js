import React, {
  Component
} from 'react'
import AppBar from 'material-ui/AppBar'
import './TopNav.css'


class TopNav extends Component {
  render() {
    var { title } = this.props
    return (
      <AppBar
        title={title}
      />
    )
  }
}


export default TopNav
