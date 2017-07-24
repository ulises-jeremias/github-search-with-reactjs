import React, {
  Component
} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import CircularProgress from 'material-ui/CircularProgress'
import Avatar from 'material-ui/Avatar'
import UserStats from '../UserStats'
import './User.css'


const history = createBrowserHistory()

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then(response => response.json())
        .then(
            user => {
              console.log(user)
                this.setState({
                    user: user
                });
            }
        )
  }

  render() {

    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.state.user) {
      return (
        <div className="user-page">
          <CircularProgress />
        </div>
      );
    }

    // If we get to this part of `render`, then the user is loaded
    const user = this.state.user;

    // Gather up some number stats about the user, to be used in a map below
    const stats = [{
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
    ];

    return (
      <div className="user-page">
         <div className="user-info">
           <Avatar
              className="user-info__avatar"
              src={user.avatar_url}
              size={250}
           />
           <Link className="user-info__text" to={`/user/${user.login}`}>
               <h2 className="user-info__title">{user.login} ({user.name})</h2>
               <p className="user-info__bio">{user.bio}</p>
           </Link>
           <UserStats stats={stats}/>
         </div>
     </div>
    )
  }
}

export default User
