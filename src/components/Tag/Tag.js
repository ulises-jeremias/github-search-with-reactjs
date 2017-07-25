import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import { blue300, fullWhite } from 'material-ui/styles/colors';


class Tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null,
      icon: null
    }
  }

  componentWillMount() {
    var { content, icon } = this.props
    this.setState({
      content: content,
      icon: icon
    })
  }

  render() {
    var { content, icon } = this.state
    return (
      <Chip
         backgroundColor={blue300}
       >
          <Avatar
             icon={icon}
             color={fullWhite}
             backgroundColor={blue300}
           />
         {content}
      </Chip>
    )
  }
}

export default Tag
