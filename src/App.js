import React, { Component } from 'react';
import './styles/reset.css';
import './styles/grid.css';
import './styles/typography.css';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <div className="headerBrand">
              <h2>Robert Holden</h2>
            </div>
            <nav className="headerNav">
              <ul>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Experience</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </header>
      </div >
    );
  }
}

export default App;
