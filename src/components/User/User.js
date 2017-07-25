import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar'
import CircularProgress from 'material-ui/CircularProgress'
import Divider from 'material-ui/Divider'
import MdSupervisorAccount from 'react-icons/lib/md/supervisor-account'
import Paper from 'material-ui/Paper'
import Stats from '../Stats'
import Tag from '../Tag'
import './User.css'



class User extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then(response => response.json())
        .then(user => {
          console.log(user)
            this.setState({
                user: user
            })
        })
  }

  render() {

    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.state.user) {
      return (
        <div className="user-page">
          <CircularProgress />
        </div>
      )
    }

    // If we get to this part of `render`, then the user is loaded
    const user = this.state.user

    // Gather up some number stats about the user, to be used in a map below
    const stats = [
      {
        name: 'Public Repos',
        value: user.public_repos,
        url: `/user/${this.props.match.params.username}/repos`
      },
      {
        name: 'Followers',
        value: user.followers,
        url: `/user/${this.props.match.params.username}/followers`
      },
      {
        name: 'Following',
        value: user.following,
        url: `/user/${this.props.match.params.username}/following`
      }
    ]

    return (
      <div className="user-page">
         <Paper>
           <div className="user-info">
             <Avatar
                className="user-info-avatar"
                src={user.avatar_url}
                size={250}
                alt={`${user.login} avatar`}
             />
             <div className="user-info-text">
                <h2>{user.name}</h2>
               <Link
                  target="_blanck"
                  to={`https://github.com/${user.login}`}
                >
                <h3 className="user-info-title">@{user.login}</h3>
               </Link>
               <Divider />
               <br />
               <div className="user-tags">
                 <Tag
                    content={user.company}
                    icon={<MdSupervisorAccount></MdSupervisorAccount>}
                 >
                 </Tag>
               </div>
               <p className="user-info-bio">{user.bio}</p>
             </div>
             <Divider />
             <Stats stats={stats}/>
           </div>
         </Paper>
     </div>
    )
  }
}

export default User
