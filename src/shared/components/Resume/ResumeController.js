'use strict';

var React = require("react");
var Router = require("react-router");
//as much as this page should be information stored in a db.
// its not necessary.

var ResumeController = React.createClass({
  getInitialState() {
    return ({
      selected: 1,
      companyName: 'Faithlife',
    });
  },
  selectItem(item, name) {
    this.setState({
      selected: item,
      companyName: name
    });

    if (item === 1) {
      document.getElementsByClassName('circle__main')[0].style.transform = ("rotate(0deg)");
    } else if (item === 2) {
      document.getElementsByClassName('circle__main')[0].style.transform = ("rotate(120deg)");
    } else {
      document.getElementsByClassName('circle__main')[0].style.transform = ("rotate(-120deg)");
    }
  },
  renderSkills() {
    return (
      <div className="right__skills">
        <h2 className="title">Skills</h2>
        <ul>
          <li className="skill">
            <div className="skill__container">
              <span>Javascript<span className="optional">(React, Node, etc.)</span> :</span>
              <div className="skill__container__language javascript">
                <div className="javascript"/>
                <div className="cover">Majority Focus</div>
              </div>
            </div>
          </li>
          <li className="skill">
            <div className="skill__container">
              <span>C#<span className="optional">(Razor, ASP.net, etc.)</span> :</span>
              <div className="skill__container__language">
                <div className="c-sharp"/>
                <div className="cover">Current Backend</div>
              </div>
            </div>
          </li>
          <li className="skill">
            <div className="skill__container">
              <span>HTML & CSS:</span>
              <div className="skill__container__language">
                <div className="html-css"/>
                <div className="cover">Its kinda basic</div>
              </div>
            </div>
          </li>
          <li className="skill">
            <div className="skill__container">
              <span>Java:</span>
              <div className="skill__container__language">
                <div className="java"/>
                <div className="cover">TA and Android Projects</div>
              </div>
            </div>
          </li>
          <li className="skill">
            <div className="skill__container">
              <span>Python<span className="optional">(Flask)</span> :</span>
              <div className="skill__container__language">
                <div className="python"/>
                <div className="cover">Couple Projects</div>
              </div>
            </div>
          </li>
          <li className="skill">
            <div className="skill__container">
              <span>C++:</span>
              <div className="skill__container__language">
                <div className="c-plus-plus"/>
                <div className="cover">TA for ADSt class</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  },
  renderVanderbilt() {
    return [
      <h2 className="main__work__info__company"><a href="https://vanderbilt.edu">{this.state.companyName}</a></h2>,
      <p>{'Vanderbilt University is my alma mater. Located in Nashville, Tennessee, the school is a top 20 University that dedicates itself to excellence.'}</p>,
      <p>{'Here I worked as a Teaching Assistant where I held office hours and graded for the first semester and second semester classes. I answered questions on Java and C++ as well as general programming questions.'}</p>
    ];
  },
  renderGivetoken() {
    return [
      <h2 className="main__work__info__company"><a href="https://givetoken.com">{this.state.companyName}</a></h2>,
      <p>{'Give Token is a startup in Nashville that currently focuses on making the recruitment process more engaging and meaningful.'}</p>,
      <p>{'At Give Token, I worked with connecting the token creation with many social media sites and designing the pages in Javascript, CSS, HTML, and PHP.'}</p>
    ];
  },
  renderFaithlife() {
    return [
      <h2 className="main__work__info__company"><a href="https://www.faithlife.com">{this.state.companyName}</a> - Current</h2>,
      <p>{'Faithlife Corporation is a Bible software company based out of  Bellingham, Washington. We provide a wide variety of products that allows people to do more and better Bible study'}</p>,
      <p>{'I work specifically with the Faithlife platform team, spending time doing alot of Javascript, C#, HTML, and CSS.'}</p>
    ];
  },
  renderHeader() {
    return (
      <div className="resume">
        <div className="resume__header">
          <div className="resume__header__profile">
            <img className="resume__header__profile__image" src='/profile_oval.png'/>
          </div>
          <div className="resume__header__info">
            <p className="resume__header__info__name">{'Michael Nakayama'}</p>
            <p className="resume__header__info__email">{'david.m.nakayama@vanderbilt.edu'}</p>
            <p className="resume__header__info__other">{'Connect with me for personal information!'}</p>
          </div>
        </div>
        <div className="resume__container">
          <div className="main">
            <h2 className="title">Work</h2>
            <div className="main__work">
              <div className="main__work__wrapper">
                <div className={"circle__main circle__main--selected--" + this.state.selected}>
                  <div onClick={this.selectItem.bind(this, 1, 'Faithlife')} className={"exp item-one item-one--selected--" + this.state.selected}>
                    <img className="item-one__image" src="/faithlife.png" />
                  </div>
                  <div onClick={this.selectItem.bind(this, 2, 'Give Token')} className={"exp item-two item-two--selected--" + this.state.selected}>
                    <img className="item-two__image" src="/token_logo.png" />
                  </div>
                  <div onClick={this.selectItem.bind(this, 3, 'Vanderbilt')} className={"exp item-three item-three--selected--" + this.state.selected}>
                    <img className="item-three__image" src="/vanderbilt_logo.png" />
                  </div>
                </div>
                <h2 className="main__work__wrapper__company">{this.state.companyName}</h2>
              </div>
              <div className="main__work__info">
                {this.state.selected === 1 ? this.renderFaithlife() : null}
                {this.state.selected === 2 ? this.renderGivetoken() : null}
                {this.state.selected === 3 ? this.renderVanderbilt() : null}
              </div>
            </div>
            <div className="main__projects">
              <h2 className="projects__title title">Personal Projects</h2>
            </div>
            <div className="main__education">
              <h2 className="main__education__title title">Education</h2>
              <ul>
                <li className="school__container">
                  <div className="school-container">
                    <div className="school">
                      <img className="school__image" src="/vanderbilt_logo.png" />
                    </div>
                  </div>
                  <div className="description">
                    <h2 className="description__name">Vanderbilt University</h2>
                    <h3 className="level">Bachelor of Computer Science</h3>
                    <h4>Relevant Classes:</h4>
                    <p>{'Intro to Java, Intro to C++, Intermediate C++ with Patterns, Discrete Structures, Computer Organization,Algorithms, Operating Systems I & II,Study of Programming Languages,Special Topics: Unmanned Aircrafts, Computer Networks, Computer Ethics, Artificial Intelligence, Network Security, Error Correcting Codes and Cryptography, and Principles of Software Engineering'}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            {this.renderSkills()}
            <div className="right__other">
              <p className="right__other__title">Other Skills</p>
              <ul>
                <li>Photography: Nikon D3200</li>
                <li>Design: this website</li>
                <li>Automotive: Wrangler owner</li>
                <li>Woodworking: kinda</li>
                <li>Crackin jokes in serious places</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
  render() {
    return(
      <div>
        {this.renderHeader()}
      </div>
    );
  }
});

module.exports = ResumeController;
