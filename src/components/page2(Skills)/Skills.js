import React, { Component, Fragment } from "react";
import "./Skills.css";

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
              <div>Basic</div>
              <div>Developing</div>
              <div>Design</div>
            </div>
          </div>
        ) : (
          <div className="Skills_container" id="page2">
            <div className="bar_Skills_title">Skills</div>
            <div className="bar_Skills_desc">
              <div>Basic</div>
              <div>Developing</div>
              <div>Design</div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Skills;
