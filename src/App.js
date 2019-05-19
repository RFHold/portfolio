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
               			  for something great. I am a quick and focused learner who actively looks and avoids complications before they become a roadblock. I am looking for a place to let me express my best concepts and use my skills to their fullest potential.</p><br />
						<p>I am currently attending Georgia Tech's Fullstack coding bootcamp. This course will refine my current knowledge gained from previous projects and jobs and help launch my career. I started off building CSS templates, and then
						  I quickly moved on to more complicated tasks. I started building custom modules for customer sites. Eventually I transitioned to a position in the company in which I was collaborating with a team to design, build and
						  deploy an internal management application.</p>
					</section>
					<section ref={(el) => this.portfolioSection = el} id="portfolioSection" className="card">
						<h2>Portfolio</h2>
						<hr />
						<div className="row">
							<div className="col-12">
								<div className="subContainer">
									<img src="/images/watchpad-logo.jpg" className="projectImage inlineImage small" alt="watchPad Logo"></img>
									<h3>WatchPad</h3>
									<p>
										WatchPad is a simple tool which allows the user to organize and keep track of movies and tv shows that they want to watch. Combining apis such as The Movie Database and TV Database to allow the user to search the ever expanding collection
										of todays media. With future plans to integrate with media servers such as Plex and Emby, WatchPad will be a great asset to anyone looking to create their own media server.</p>
									<a href="https://rfhold.github.io/bc-project-1/" className="button">Live Project</a>
								</div>
							</div>
						</div>
					</section>
					<section ref={(el) => this.experienceSection = el} id="experienceSection" className="card">
						<h2>Experience</h2>
						<hr />
						<div className="subContainer">
							<div className="flexBetween">
								<h3>501CiO Consulting</h3> <sub>3 Years <strong>Fullstack Developer</strong></sub>
							</div>
							<p>
								I started work at 501CiO making css templates for client websites. Six months later I began developing a time-sheet and invoicing system for internal use. During development I got ample experience with languages such as PHP, Ruby,
								 and JavaScript. I also utilized MySQL, Rails, Node.js, Angular.js and many other technologies. As lead developer, I used my creative thinking and ambitious personality to solve problems and fabricate a great user experience.</p>
						</div>
						<div className="subContainer">
							<div className="flexBetween">
								<h3>Cellairis</h3> <sub>8 Months <strong>Lead Sales/Repair Tech</strong></sub>
							</div>
							<p>
								At Cellairis I was charged with repairing customer devices which included replacing or repairing components, troubleshooting software issues, data recovery, and cleaning PCs. On top of being a repair tech, I was also Lead Sales.
								As the Lead Sales Associate I communicated with customers about their repair and order status as well as maintain the store to both optimize workflow and display our products effectively. My time at Cellairis tested my ability
								to multitask and communicate with the rest of my team.</p>
						</div>
					</section>
					<section ref={(el) => this.educationSection = el} id="educationSection" className="card">
						<h2>Education</h2>
						<hr />
						<div className="row">
							<div className="col-12 col-lg-6">
								<div className="subContainer">
									<div className="flexBetween">
										<h3>Mount Pisgah Christian School</h3> <sub>Highschool</sub>
									</div>
									<p>Graduated from Mount Pisgah Christian School May 2018</p>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="subContainer">
									<div className="flexBetween">
										<h3>Georgia Tech Bootcamp</h3> <sub>Higher Education</sub>
									</div>
									<p>currently attending Georgia Tech Fullstack Coding Bootcamp (expected graduation July 1, 2019)</p>
								</div>
							</div>
						</div>
					</section>
					<section ref={(el) => this.skillsSection = el} id="skillsSection" className="card">
						<h2>Skills</h2>
						<hr />
						<div className="row">
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>JavaScript</h4>
									<code>10/10</code>
								</div>
								<div className="flexBetween">
									<h4>PHP</h4>
									<code>9/10</code>
								</div>
								<div className="flexBetween">
									<h4>Java</h4>
									<code>7/10</code>
								</div>
								<div className="flexBetween">
									<h4>Ruby</h4>
									<code>4/10</code>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>HTML</h4>
									<code>10/10</code>
								</div>
								<div className="flexBetween">
									<h4>CSS</h4>
									<code>10/10</code>
								</div>
								<div className="flexBetween">
									<h4>SASS</h4>
									<code>9/10</code>
								</div>
								<div className="flexBetween">
									<h4>Typescript</h4>
									<code>6/10</code>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Node.js</h4>
									<code>10/10</code>
								</div>
								<div className="flexBetween">
									<h4>Ajax</h4>
									<code>10/10</code>
								</div>
								<div className="flexBetween">
									<h4>Express</h4>
									<code>9/10</code>
								</div>
								<div className="flexBetween">
									<h4>React</h4>
									<code>8/10</code>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Git</h4>
									<code>10/10</code>
								</div>
								<div className="flexBetween">
									<h4>REST</h4>
									<code>10/10</code>
								</div>
								<div className="flexBetween">
									<h4>MySQL</h4>
									<code>8/10</code>
								</div>
								<div className="flexBetween">
									<h4>MongoDB</h4>
									<code>7/10</code>
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Creative</h4>
									<code>10/10</code>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Ambitious</h4>
									<code>10/10</code>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Communication</h4>
									<code>10/10</code>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Dedicated</h4>
									<code>10/10</code>
								</div>
							</div>
						</div>
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

		if (this.hasBeenScrolledPast(this.skillsSection, offset)) {
			color = 'green';
		} else if (this.hasBeenScrolledPast(this.experienceSection, offset)) {
			color = 'blue';
		} else {
			color = 'purple';
		};

		this.setState({
			themeAmbiance: color,
		});
	}
}

export default App;
