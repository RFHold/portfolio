import React, { Component } from 'react';
import './styles/reset.css';
import './styles/bootstrap-grid.css';
import './styles/typography.css';
import './styles/app.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      themeAmbiance: 'purple',
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className={`background ${this.state.themeAmbiance}`}>
        <header>
          <div className="wrapper">
            <div className="headerBrand">
              <h1>Robert Holden</h1>
            </div>
            <nav className="headerNav">
              <ul>
                <li><a href="#aboutMeSection">About Me</a></li>
                <li><a href="#portfolioSection">Portfolio</a></li>
                <li><a href="#experienceSection">Experience</a></li>
                <li><a href="#contactSection">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="wrapper">
          <section ref={(el) => this.aboutMeSection = el} id="aboutMeSection" className="card">
            <h2>About Me</h2>
            <hr />
            <img src="/images/Headshot small.jpg" alt="Headshot" className="inlineImage"></img>
            <p>With a passion for solving problems I started my career path early in highschool with my first job building website templates. I enjoy the logistical aspect of programming with every day being a new opportunity
               for something great. I am a quick and focused learner who actively looks and avoids complications before they become a roadblock. I am looking for a place to let me express my best concepts and use my skills to their fullest potential.</p><br/>
            <p>I am currently attending Georgia Tech's Fullstack coding bootcamp. This course will refine my current knowledge gained from previous projects and jobs and help launch my career. I started off building CSS templates, and then
              I quickly moved on to more complicated tasks. I started building custom modules for customer sites. Eventually I transitioned to a position in the company in which I was collaborating with a team to design, build and
              deploy an internal management application.
            </p>
          </section>
          <section ref={(el) => this.portfolioSection = el} id="portfolioSection" className="card">
            <h2>Portfolio</h2>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className="projectContainer">
                  <img src="/images/watchpad-logo.jpg" className="projectImage inlineImage small" alt="watchPad Logo"></img>
                  <h3>WatchPad</h3>
                  <br />
                  <p>
                    WatchPad is a simple tool which allows the user to organize and keep track of movies and tv shows that they want to watch. Combining apis such as The Movie Database and TV Database to allow the user to search the ever expanding collection
                    of todays media. With future plans to integrate with media servers such as Plex and Emby, WatchPad will be a great asset to anyone looking to create their own media server.                   
                  </p>
                  <a href="https://rfhold.github.io/bc-project-1/" className="button">Live Project</a>
                </div>
              </div>
            </div>
          </section>
          <section ref={(el) => this.experienceSection = el} id="experienceSection" className="card">
            <h2>Experience</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
               occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section ref={(el) => this.skillsSection = el} id="skillsSection" className="card">
            <h2>Skills</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
               occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section id="contactSection" className="card">
            <h2>Contact</h2>
            <hr />
            <p><strong>Email : </strong><a href="mailto:robert@robhold.com">robert@robhold.com</a></p>
            <p><strong>Phone : </strong><a href="tel:+14045029135">(404) 502-9135</a></p>
            <p><strong>Github : </strong><a href="https://github.com/RFHold">github.com/RFHold</a></p>
          </section>
        </div>
      </div >
    );
  }

  hasBeenScrolledPast(el, offset = 0) {
    if (el) {
      const top = el.getBoundingClientRect().top;
      let past = false
      if ((top - offset) < 0) {
        past = true
      }
      return past;
    }
  }

  handleScroll(event) {
    const offset = window.innerHeight * 0.8;
    let color = 'purple';

    if (this.hasBeenScrolledPast(this.experienceSection, offset)) {
      color = 'green';
    } else if (this.hasBeenScrolledPast(this.portfolioSection, offset)) {
      color = 'blue';
    }else{
      color = 'purple';
    };

    this.setState({
      themeAmbiance: color,
    });
  }
}

export default App;
