import React, {
  Component
} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Paper, TextField, RaisedButton, FontIcon } from 'material-ui'
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

    handleSubmit() {
      var { username } = this.state
      history.push(`/user/${username}`)
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
          <Paper>
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
              <RaisedButton
                onClick={this.handleSubmit}
                secondary={true}
                label="Search"
              />
            </footer>
          </Paper>
        </div>
      )
    }
}

export default Search
