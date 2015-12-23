'use strict';

var React = require("react");
var Router = require("react-router");
//as much as this page should be information stored in a db.
// its not necessary.

var ResumeController = React.createClass({
  displayName: "ResumeController",

  getInitialState: function getInitialState() {
    return {
      selected: 1,
      companyName: 'Faithlife'
    };
  },
  selectItem: function selectItem(item, name) {
    this.setState({
      selected: item,
      companyName: name
    });

    if (item === 1) {
      document.getElementsByClassName('circle__main')[0].style.transform = "rotate(0deg)";
    } else if (item === 2) {
      document.getElementsByClassName('circle__main')[0].style.transform = "rotate(120deg)";
    } else {
      document.getElementsByClassName('circle__main')[0].style.transform = "rotate(-120deg)";
    }
  },
  renderSkills: function renderSkills() {
    return React.createElement(
      "div",
      { className: "right__skills" },
      React.createElement(
        "h2",
        { className: "title" },
        "Skills"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          { className: "skill" },
          React.createElement(
            "div",
            { className: "skill__container" },
            React.createElement(
              "span",
              null,
              "Javascript",
              React.createElement(
                "span",
                { className: "optional" },
                "(React, Node, etc.)"
              ),
              " :"
            ),
            React.createElement(
              "div",
              { className: "skill__container__language javascript" },
              React.createElement("div", { className: "javascript" }),
              React.createElement(
                "div",
                { className: "cover" },
                "Majority Focus"
              )
            )
          )
        ),
        React.createElement(
          "li",
          { className: "skill" },
          React.createElement(
            "div",
            { className: "skill__container" },
            React.createElement(
              "span",
              null,
              "C#",
              React.createElement(
                "span",
                { className: "optional" },
                "(Razor, ASP.net, etc.)"
              ),
              " :"
            ),
            React.createElement(
              "div",
              { className: "skill__container__language" },
              React.createElement("div", { className: "c-sharp" }),
              React.createElement(
                "div",
                { className: "cover" },
                "Current Backend"
              )
            )
          )
        ),
        React.createElement(
          "li",
          { className: "skill" },
          React.createElement(
            "div",
            { className: "skill__container" },
            React.createElement(
              "span",
              null,
              "HTML & CSS:"
            ),
            React.createElement(
              "div",
              { className: "skill__container__language" },
              React.createElement("div", { className: "html-css" }),
              React.createElement(
                "div",
                { className: "cover" },
                "Its kinda basic"
              )
            )
          )
        ),
        React.createElement(
          "li",
          { className: "skill" },
          React.createElement(
            "div",
            { className: "skill__container" },
            React.createElement(
              "span",
              null,
              "Java:"
            ),
            React.createElement(
              "div",
              { className: "skill__container__language" },
              React.createElement("div", { className: "java" }),
              React.createElement(
                "div",
                { className: "cover" },
                "TA and Android Projects"
              )
            )
          )
        ),
        React.createElement(
          "li",
          { className: "skill" },
          React.createElement(
            "div",
            { className: "skill__container" },
            React.createElement(
              "span",
              null,
              "Python",
              React.createElement(
                "span",
                { className: "optional" },
                "(Flask)"
              ),
              " :"
            ),
            React.createElement(
              "div",
              { className: "skill__container__language" },
              React.createElement("div", { className: "python" }),
              React.createElement(
                "div",
                { className: "cover" },
                "Couple Projects"
              )
            )
          )
        ),
        React.createElement(
          "li",
          { className: "skill" },
          React.createElement(
            "div",
            { className: "skill__container" },
            React.createElement(
              "span",
              null,
              "C++:"
            ),
            React.createElement(
              "div",
              { className: "skill__container__language" },
              React.createElement("div", { className: "c-plus-plus" }),
              React.createElement(
                "div",
                { className: "cover" },
                "TA for ADSt class"
              )
            )
          )
        )
      )
    );
  },
  renderVanderbilt: function renderVanderbilt() {
    return [React.createElement(
      "h2",
      { className: "main__work__info__company" },
      React.createElement(
        "a",
        { href: "https://vanderbilt.edu" },
        this.state.companyName
      )
    ), React.createElement(
      "p",
      null,
      'Vanderbilt University is my alma mater. Located in Nashville, Tennessee, the school is a top 20 University that dedicates itself to excellence.'
    ), React.createElement(
      "p",
      null,
      'Here I worked as a Teaching Assistant where I held office hours and graded for the first semester and second semester classes. I answered questions on Java and C++ as well as general programming questions.'
    )];
  },
  renderGivetoken: function renderGivetoken() {
    return [React.createElement(
      "h2",
      { className: "main__work__info__company" },
      React.createElement(
        "a",
        { href: "https://givetoken.com" },
        this.state.companyName
      )
    ), React.createElement(
      "p",
      null,
      'Give Token is a startup in Nashville that currently focuses on making the recruitment process more engaging and meaningful.'
    ), React.createElement(
      "p",
      null,
      'At Give Token, I worked with connecting the token creation with many social media sites and designing the pages in Javascript, CSS, HTML, and PHP.'
    )];
  },
  renderFaithlife: function renderFaithlife() {
    return [React.createElement(
      "h2",
      { className: "main__work__info__company" },
      React.createElement(
        "a",
        { href: "https://www.faithlife.com" },
        this.state.companyName
      ),
      " - Current"
    ), React.createElement(
      "p",
      null,
      'Faithlife Corporation is a Bible software company based out of  Bellingham, Washington. We provide a wide variety of products that allows people to do more and better Bible study'
    ), React.createElement(
      "p",
      null,
      'I work specifically with the Faithlife platform team, spending time doing alot of Javascript, C#, HTML, and CSS.'
    )];
  },
  renderHeader: function renderHeader() {
    return React.createElement(
      "div",
      { className: "resume" },
      React.createElement(
        "div",
        { className: "resume__header" },
        React.createElement(
          "div",
          { className: "resume__header__profile" },
          React.createElement("img", { className: "resume__header__profile__image", src: "/profile_oval.png" })
        ),
        React.createElement(
          "div",
          { className: "resume__header__info" },
          React.createElement(
            "p",
            { className: "resume__header__info__name" },
            'Michael Nakayama'
          ),
          React.createElement(
            "p",
            { className: "resume__header__info__email" },
            'david.m.nakayama@vanderbilt.edu'
          ),
          React.createElement(
            "p",
            { className: "resume__header__info__other" },
            'Connect with me for personal information!'
          )
        )
      ),
      React.createElement(
        "div",
        { className: "resume__container" },
        React.createElement(
          "div",
          { className: "main" },
          React.createElement(
            "h2",
            { className: "title" },
            "Work"
          ),
          React.createElement(
            "div",
            { className: "main__work" },
            React.createElement(
              "div",
              { className: "main__work__wrapper" },
              React.createElement(
                "div",
                { className: "circle__main circle__main--selected--" + this.state.selected },
                React.createElement(
                  "div",
                  { onClick: this.selectItem.bind(this, 1, 'Faithlife'), className: "exp item-one item-one--selected--" + this.state.selected },
                  React.createElement("img", { className: "item-one__image", src: "/faithlife.png" })
                ),
                React.createElement(
                  "div",
                  { onClick: this.selectItem.bind(this, 2, 'Give Token'), className: "exp item-two item-two--selected--" + this.state.selected },
                  React.createElement("img", { className: "item-two__image", src: "/token_logo.png" })
                ),
                React.createElement(
                  "div",
                  { onClick: this.selectItem.bind(this, 3, 'Vanderbilt'), className: "exp item-three item-three--selected--" + this.state.selected },
                  React.createElement("img", { className: "item-three__image", src: "/vanderbilt_logo.png" })
                )
              ),
              React.createElement(
                "h2",
                { className: "main__work__wrapper__company" },
                this.state.companyName
              )
            ),
            React.createElement(
              "div",
              { className: "main__work__info" },
              this.state.selected === 1 ? this.renderFaithlife() : null,
              this.state.selected === 2 ? this.renderGivetoken() : null,
              this.state.selected === 3 ? this.renderVanderbilt() : null
            )
          ),
          React.createElement(
            "div",
            { className: "main__projects" },
            React.createElement(
              "h2",
              { className: "projects__title title" },
              "Personal Projects"
            )
          ),
          React.createElement(
            "div",
            { className: "main__education" },
            React.createElement(
              "h2",
              { className: "main__education__title title" },
              "Education"
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                { className: "school__container" },
                React.createElement(
                  "div",
                  { className: "school-container" },
                  React.createElement(
                    "div",
                    { className: "school" },
                    React.createElement("img", { className: "school__image", src: "/vanderbilt_logo.png" })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "description" },
                  React.createElement(
                    "h2",
                    { className: "description__name" },
                    "Vanderbilt University"
                  ),
                  React.createElement(
                    "h3",
                    { className: "level" },
                    "Bachelor of Computer Science"
                  ),
                  React.createElement(
                    "h4",
                    null,
                    "Relevant Classes:"
                  ),
                  React.createElement(
                    "p",
                    null,
                    'Intro to Java, Intro to C++, Intermediate C++ with Patterns, Discrete Structures, Computer Organization,Algorithms, Operating Systems I & II,Study of Programming Languages,Special Topics: Unmanned Aircrafts, Computer Networks, Computer Ethics, Artificial Intelligence, Network Security, Error Correcting Codes and Cryptography, and Principles of Software Engineering'
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "right" },
          this.renderSkills(),
          React.createElement(
            "div",
            { className: "right__other" },
            React.createElement(
              "p",
              { className: "right__other__title" },
              "Other Skills"
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Photography: Nikon D3200"
              ),
              React.createElement(
                "li",
                null,
                "Design: this website"
              ),
              React.createElement(
                "li",
                null,
                "Automotive: Wrangler owner"
              ),
              React.createElement(
                "li",
                null,
                "Woodworking: kinda"
              ),
              React.createElement(
                "li",
                null,
                "Crackin jokes in serious places"
              )
            )
          )
        )
      )
    );
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      this.renderHeader()
    );
  }
});

module.exports = ResumeController;