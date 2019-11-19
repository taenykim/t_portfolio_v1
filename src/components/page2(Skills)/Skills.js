import React, { Component, Fragment } from "react";
import "./Skills.css";
import logo from "./SkillsImage/react_logo.png";
import css_logo from "./SkillsImage/css.png";
import github from "./SkillsImage/github.png";
import html_logo from "./SkillsImage/html.png";
import jquery_logo from "./SkillsImage/jquery.png";
import js_logo from "./SkillsImage/js.png";
import network from "./SkillsImage/network.png";
import nodejs from "./SkillsImage/nodejs.png";
import sass from "./SkillsImage/sass.png";
import workflow from "./SkillsImage/workflow.png";
import aws from "./SkillsImage/aws.png";
import redux from "./SkillsImage/redux.png";
import next from "./SkillsImage/next.png";
import native from "./SkillsImage/native.png";
import mysql from "./SkillsImage/mysql.png";
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
            {/* <div className="bar_Skills_title">Skills</div> */}
            <div className="bar_Skills_desc">
              <div className="bar_Skills_desc_page">
                <div className="bar_Skills_desc_title">
                  <span>Basic</span>
                </div>
                <div className="Skills_desc_inner_img_container">
                  <div className="bar_Skills_inner_img">
                    <img src={html_logo} className="skills_img" />
                    <p>HTML</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={css_logo} className="skills_img" />
                    <p>CSS</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={js_logo} className="skills_img" />
                    <p>JS</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={jquery_logo} className="skills_img" />
                    <p>jQuery</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={workflow} className="skills_img" />
                    <p>DATA Structure</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={network} className="skills_img" />
                    <p>Network</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={github} className="skills_img" />
                    <p>GITHUB</p>
                  </div>
                </div>
              </div>
              <div
                className="p_line"
                style={{
                  background: "black",
                  marginTop: "3vw",
                  marginBottom: "3vw",
                  width: "60vw",
                  alignSelf: "center"
                }}
              ></div>

              <div className="bar_Skills_desc_page">
                <div className="bar_Skills_desc_title">
                  <span>Extension</span>
                </div>
                <div className="Skills_desc_inner_img_container">
                  <div className="bar_Skills_inner_img">
                    <img src={logo} className="skills_img" />
                    <p>REACT</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={nodejs} className="skills_img" />
                    <p>NodeJS</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={sass} className="skills_img" />
                    <p>SASS</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={aws} className="skills_img" />
                    <p>AWS EC2</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={redux} className="skills_img" />
                    <p>Redux</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={next} className="skills_img" />
                    <p>Next.js</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={native} className="skills_img" />
                    <p>REACT Native</p>
                  </div>
                  <div className="bar_Skills_inner_img">
                    <img src={mysql} className="skills_img" />
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="Skills_container" id="page2">
            <div className="bar_Skills_title">Skills</div>
            <div className="bar_Skills_desc">
              <div className="bar_Skills_desc_page">
                <div className="bar_Skills_desc_title">
                  <span>Basic</span>
                </div>
                <div className="bar_Skills_desc_inner_img_container">
                  <div className="bar_Skills_desc_inner_img_container_half">
                    <div className="bar_Skills_inner_img">
                      <img src={html_logo} className="bar_Skills_img" />
                      <p>HTML</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={css_logo} className="bar_Skills_img" />
                      <p>CSS</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={js_logo} className="bar_Skills_img" />
                      <p>JS</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={jquery_logo} className="bar_Skills_img" />
                      <p>jQuery</p>
                    </div>
                  </div>
                  <div className="bar_Skills_desc_inner_img_container_half">
                    <div className="bar_Skills_inner_img">
                      <img src={workflow} className="bar_Skills_img" />
                      <p>DATA Structure</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={network} className="bar_Skills_img" />
                      <p>Network</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={github} className="bar_Skills_img" />
                      <p>GITHUB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="p_line"
                style={{
                  background: "black",
                  marginTop: "3vw",
                  marginBottom: "3vw",
                  width: "60vw",
                  alignSelf: "center"
                }}
              ></div>

              <div className="bar_Skills_desc_page">
                <div className="bar_Skills_desc_title">
                  <span>Extension</span>
                </div>
                <div className="bar_Skills_desc_inner_img_container">
                  <div className="bar_Skills_desc_inner_img_container_half">
                    <div className="bar_Skills_inner_img">
                      <img src={logo} className="bar_Skills_img" />
                      <p>REACT</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={nodejs} className="bar_Skills_img" />
                      <p>NodeJS</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={sass} className="bar_Skills_img" />
                      <p>SASS</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={aws} className="bar_Skills_img" />
                      <p>AWS EC2</p>
                    </div>
                  </div>
                  <div className="bar_Skills_desc_inner_img_container_half">
                    <div className="bar_Skills_inner_img">
                      <img src={redux} className="bar_Skills_img" />
                      <p>Redux</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={next} className="bar_Skills_img" />
                      <p>Next.js</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={native} className="bar_Skills_img" />
                      <p>REACT Native</p>
                    </div>
                    <div className="bar_Skills_inner_img">
                      <img src={mysql} className="bar_Skills_img" />
                      <p>MySQL</p>
                    </div>
                  </div>
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
