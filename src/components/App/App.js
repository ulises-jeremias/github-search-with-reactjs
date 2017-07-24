import React, {
  Component
} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router'
import TopNav from '../TopNav'

/*
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.
If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
*/
class App extends Component {
    render() {
        return (
          <MuiThemeProvider >
            <div>
                <header>
                    <TopNav
                      title="Github Profile Search"
                    />
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
          </MuiThemeProvider>
        )
    }
}

export default App
