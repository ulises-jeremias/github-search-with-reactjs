import React, {
  Component
} from 'react'
import { createBrowserHistory } from 'history'
import { Paper, TextField, FloatingActionButton } from 'material-ui'
import FaSearch from 'react-icons/lib/fa/search'
import './Search.css'

const history = createBrowserHistory()

class Search extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
          username: "",
          error: null
        }
    }

    handleSubmit(e) {
      e.preventDefault()
      var { username } = this.state
      if (username) {
        history.push(`/user/${username}`)
        window.location.reload()
      }
    }

    handleChange = property => event => {
      this.setState({
        [property]: event.target.value,
        error: null
      })
    }

    render() {
      return (
        <div id="github_search">
          <form onSubmit={this.handleSubmit}>
            <Paper zDepth={2}>
              <header id="github_search_header">Enter a github username</header>
              <section id="github_search_section">
                <TextField
                  id="username"
                  floatingLabelText="Username"
                  fullWidth={true}
                  value={this.state.username}
                  onChange={this.handleChange("username")}
                />
              </section>
              <footer id="github_search_footer">
                <FloatingActionButton
                  onClick={this.handleSubmit}
                  secondary={true}
                  children={<FaSearch/>}
                />
              </footer>
            </Paper>
          </form>
        </div>
      )
    }
}

export default Search
