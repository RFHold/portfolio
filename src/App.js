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
						<p>
							With a passion for solving problems I started my career path with my first job building website templates. I enjoy the logistical aspect of programming with every day being a new opportunity for something great. I am a quick and focused learner who actively looks and avoids complications before they become a roadblock. I am looking for a place to let me express my best concepts and use my skills to their fullest potential.

						</p>
					</section>
					<section ref={(el) => this.portfolioSection = el} id="portfolioSection" className="card">
						<h2>Portfolio</h2>
						<hr />
						<div className="row">
							<div className="col-12">
								<div className="subContainer">
									<img src="/images/watchpad.jpg" className="projectImage inlineImage small" alt="watchPad Logo"></img>

									<div className="flexBetween">
										<h3>WatchPad</h3>
									</div>
									<p>
										WatchPad is a simple tool which allows the user to organize and keep track of movies and tv shows that they want to watch. Combining apis such as The Movie Database and TV Database to allow the user to search the ever expanding collection
										of todays media. With future plans to integrate with media servers such as Plex and Emby, WatchPad will be a great asset to anyone looking to create their own media server.</p>
									<a href="https://rfhold.github.io/watchpad-poc/">Deployed</a>&nbsp;&nbsp;
									<a href="https://github.com/RFHold/watchpad-poc">Github</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="subContainer">
									<img src="/images/dialog.jpg" className="projectImage inlineImage small" alt="DiaLOG Logo"></img>

									<div className="flexBetween">
										<h3>DiaLOG</h3>
									</div>
									<p>DiaLOG is a web based group chat application. DiaLOG allows you to create groups of people and organize your topics with channels.
										With the power of Web Sockets, DiaLOG facilitates instant communication for easy of use.</p>
									<p>DiaLOG was build using Node.js, Express, Web Sockets, Bootstrap, PUG, MySQL, and a few supporting packages.</p>
									<a href="https://dialog-application.herokuapp.com/">Deployed</a>&nbsp;&nbsp;
									<a href="https://github.com/RFHold/dialog">Github</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="subContainer">
									<img src="/images/optime.jpg" className="projectImage inlineImage small" alt="Optime Logo"></img>

									<div className="flexBetween">
										<h3>Optime</h3>
									</div>
									<p>Optime is a lightweight system designed to take the hassle out of invoicing clients. Optime allows a user to create clients and track 
										progress on projects and tasks defined my the user. Once Tasks have been made, time can be logged to those tasks adn then invoiced at a later date.</p>
									<p>Optime uses React, Node.js, Express, MySQL, SCSS, and a some more minor packages.</p>
									<a href="https://optime-application.herokuapp.com/">Deployed</a>&nbsp;&nbsp;
									<a href="https://github.com/RFHold/client-invoicer">Github</a>
								</div>
							</div>
						</div>
					</section>
					<section ref={(el) => this.experienceSection = el} id="experienceSection" className="card">
						<h2>Experience</h2>
						<hr />
						<div className="subContainer">
							<div className="flexBetween">
								<h3>Cellairis</h3> <sub className="stamp" >8 Months <strong>Lead Sales/Repair Tech</strong></sub>
							</div>
							<p>
								At Cellairis I was charged with repairing customer devices which included replacing or repairing components, troubleshooting software issues, data recovery, and cleaning PCs. On top of being a repair tech, I was also Lead Sales.
												As the Lead Sales Associate I communicated with customers about their repair and order status as well as maintain the store to both optimize workflow and display our products effectively. My time at Cellairis tested my ability
								to multitask and communicate with the rest of my team.</p>
						</div>
						<div className="subContainer">
							<div className="flexBetween">
								<h3>501CiO Consulting</h3> <sub className="stamp">3 Years <strong>Fullstack Developer</strong></sub>
							</div>
							<p>
								I started work at 501CiO making css templates for client websites. Six months later I began developing a time-sheet and invoicing system for internal use. During development I got ample experience with languages such as PHP, Ruby,
								 and JavaScript. I also utilized MySQL, Rails, Node.js, Angular.js and many other technologies. As lead developer, I used my creative thinking and ambitious personality to solve problems and fabricate a great user experience.</p>
						</div>
						<div className="subContainer">
							<div className="flexBetween">
								<h3>FRC Robotics</h3> <sub className="stamp">3 Seasons <strong>Lead Programmer/Electrical</strong></sub>
							</div>
							<p>During 3 of my years in highschool, I lead the programming team for team 4749 in FRC Robotics. Throughout my time there, I utilized Java and C++ to program a control interface, perform vision processing, and communicate with motor
                				controllers or other modules.</p>
						</div>
					</section>
					<section ref={(el) => this.educationSection = el} id="educationSection" className="card">
						<h2>Education</h2>
						<hr />
						<div className="row">
							<div className="col-12 col-lg-6 mx-2">
								<div className="subContainer">
									<div className="flexBetween">
										<h3>Mount Pisgah Christian School</h3> <sub className="stamp"><strong>Highschool</strong></sub>
									</div>
									<p>Graduated from Mount Pisgah Christian School May 2018</p>
								</div>
							</div>
							<div className="col-12 col-lg-6 mx-2">
								<div className="subContainer">
									<div className="flexBetween">
										<h3>Georgia Tech Bootcamp</h3> <sub className="stamp"><strong>Higher Education</strong></sub>
									</div>
									<p>Currently attending Georgia Tech Fullstack Coding Bootcamp (graduation July 1, 2019)</p>
								</div>
							</div>
						</div>
					</section>
					<section ref={(el) => this.skillsSection = el} id="skillsSection" className="card">
						<h2>Skills</h2>
						<hr />
						<div className="row separatedRow-4-2">
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>JavaScript</h4>
								</div>
								<div className="flexBetween">
									<h4>PHP</h4>								
								</div>
								<div className="flexBetween">
									<h4>Java</h4>								
								</div>
								<div className="flexBetween">
									<h4>Ruby</h4>								
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>HTML</h4>
								</div>
								<div className="flexBetween">
									<h4>CSS</h4>
								</div>
								<div className="flexBetween">
									<h4>SASS</h4>								
								</div>
								<div className="flexBetween">
									<h4>Typescript</h4>								
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Node.js</h4>
								</div>
								<div className="flexBetween">
									<h4>Angular</h4>
								</div>
								<div className="flexBetween">
									<h4>Express</h4>								
								</div>
								<div className="flexBetween">
									<h4>React</h4>								
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Git</h4>
								</div>
								<div className="flexBetween">
									<h4>REST</h4>
								</div>
								<div className="flexBetween">
									<h4>MySQL</h4>								
								</div>
								<div className="flexBetween">
									<h4>MongoDB</h4>								
								</div>
							</div>
						</div>
						<br />
						<div className="row separatedRow-4-2">
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Creative</h4>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Ambitious</h4>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Dedicated</h4>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="flexBetween">
									<h4>Communication</h4>
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
		const offset = window.innerHeight * 0.7;
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
