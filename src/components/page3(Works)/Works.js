import React, { Component, Fragment } from "react";
import "./Works.css";
import WorkItem from "./WorkItem";

class Works extends Component {
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
          <div className="Works_container" id="page3">
            {/* <div className="Content_title">Works</div> */}
            <div className="Content_desc">
              <div>This is</div>
              <div>Works</div>
              <div>Page</div>
            </div>
          </div>
        ) : (
          <div className="Works_container" id="page3">
            <div className="bar_Content_title">Works</div>
            <div className="bar_Content_desc">
              <div className="button_container">
                <table>
                  <td className="works_button">fashub</td>
                  <td className="works_button">portfoliov1</td>
                  <td className="works_button">none</td>
                </table>
              </div>
              <WorkItem />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Works;
