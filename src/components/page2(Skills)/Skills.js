import React, { Component, Fragment } from "react";
import "./Skills.css";
import logo from "C:/Users/TAENY-KIM/Desktop/태은이의 여정/t_portfolio_v1/src/images/skills/react_logo.png";

class Skills extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, desktop: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth < 1040) {
      this.setState({
        desktop: false
      });
    } else {
      this.setState({
        desktop: true
      });
    }
  }
  render() {
    return (
      <Fragment>
        {this.state.desktop ? (
          <div className="Skills_container" id="page2">
            <div className="Skills_title">Skills</div>
            <div className="Skills_desc">
              <div className="Skills_desc_inner_container">
                <div className="Skills_inner_title">Basic</div>
                <div className="Skills_inner_img">
                  <img src={logo} className="Skills_img" />
                </div>
              </div>
              <div className="Skills_desc_inner_container">
                <div className="Skills_inner_title">Programming</div>
                <div className="Skills_inner_img"></div>
              </div>
              <div className="Skills_desc_inner_container">
                <div className="Skills_inner_title">Design</div>
                <div className="Skills_inner_img"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="Skills_container" id="page2">
            <div className="bar_Skills_title">Skills</div>
            <div className="bar_Skills_desc">
              <div className="bar_Skills_inner_title"><span>Basic</span></div>
              <div className="bar_Skills_desc_inner_img_container">
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Korean</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>English</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>C</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Java</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Python</p>
                </div>
              </div>
              <div className="bar_Skills_inner_title"><span>Programming</span></div>
              <div className="bar_Skills_desc_inner_img_container">
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Korean</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>English</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>C</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Java</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Python</p>
                </div>
              </div>
              <div className="bar_Skills_inner_title"><span>Design</span></div>
              <div className="bar_Skills_desc_inner_img_container">
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Korean</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>English</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>C</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Java</p>
                </div>
                <div className="bar_Skills_inner_img">
                  <img src={logo} className="bar_Skills_img" />
                  <p>Python</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Skills;
