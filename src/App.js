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
            <p>I am currently attending Georgia Tech's Fullstack coding bootcamp. This course will refine my current knowlage gained from previouse projects and jobs and help launch my career. Starting off building CSS templates,
              I quickly moved on to more complicated tasks. I started building custom modules for customer sites. Eventually I transisioned to a position in the company in which I was colaberating with a team to design, build and
              deplay an internal managment application. I love the problem solving aspect of programming, I enjoy taking an issue and breaking it down into it most basic steps and then building a solution.
            </p><p>I am currently attending Georgia Tech's Fullstack coding bootcamp. This course will refine my current knowlage gained from previouse projects and jobs and help launch my career. Starting off building CSS templates,
              I quickly moved on to more complicated tasks. I started building custom modules for customer sites. Eventually I transisioned to a position in the company in which I was colaberating with a team to design, build and
              deplay an internal managment application. I love the problem solving aspect of programming, I enjoy taking an issue and breaking it down into it most basic steps and then building a solution.
            </p>
          </section>
          <section ref={(el) => this.portfolioSection = el} id="portfolioSection" className="card">
            <h2>Portfolio</h2>
            <hr />
            <div className="row">
              <div className="col-4">
                <img src="http://via.placeholder.com/300" className="projectImage" alt="project"></img>
              </div>
              <div className="col-8">
                <div className="projectDescription">
                  <h3>Project</h3>
                  <p>project description that describes a describable project.
                    project description that describes a describable project.
                  project description that describes a describable project.
                  project description that describes a describable project.
                  project description that describes a describable project.
                  project description that describes a describable project.
                  project description that describes a describable project.
                  project description that describes a describable project.
                  </p>
                  <a href="./" className="button">Live Project</a>
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
    };

    this.setState({
      themeAmbiance: color,
    });
  }
}

export default App;
