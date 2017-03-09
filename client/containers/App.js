import React from 'react';
import { Link } from 'react-router/es6'

class App extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  links = () => {
    return [
      { name: 'Home', url: '/' },
      { name: 'Notes', url: '/notes' },
    ].map( (link, i) => {
      let active = this.props.location.pathname === link.url ? 'active' : ''
      return (
        <li key={i} className={active}>
          <Link className="black-text" to={link.url}>{link.name}</Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <nav className="lime accent-1">
          <div className="nav-wrapper">
            <Link className="black-text" to="/">Logo</Link>
            <a data-activates="mobile" className="button-collapse">
              <i className="black-text fa fa-bars" />
            </a>
            <ul className="right hide-on-med-and-down">
              { this.links() }
            </ul>
            <ul className="side-nav" id="mobile">
              { this.links() }
            </ul>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }
}

export default App;
