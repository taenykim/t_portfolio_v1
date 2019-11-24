import React, { Component, Fragment } from "react";
import "./Works.css";
import WorkItem from "./WorkItem";

class Works extends Component {
  state = {
    mode: "fashub"
  };
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

  modeChange1 = () => {
    this.setState({
      mode: "fashub"
    });
    document.getElementsByClassName("works_button")[0].style =
      "background:white; color:rgba(96,74,138)";
    document.getElementsByClassName("works_button")[1].style =
      "background:rgba(96,74,138); color:white";
    document.getElementsByClassName("works_button")[2].style =
      "background:rgba(96,74,138); color:white";
  };
  modeChange2 = () => {
    this.setState({
      mode: "portfoliov1"
    });
    document.getElementsByClassName("works_button")[0].style =
      "background:rgba(96,74,138); color:white";
    document.getElementsByClassName("works_button")[1].style =
      "background:white; color:rgba(96,74,138)";
    document.getElementsByClassName("works_button")[2].style =
      "background:rgba(96,74,138); color:white";

    console.log(document.getElementsByClassName("works_button")[1]);
  };
  modeChange3 = () => {
    this.setState({
      mode: "none"
    });
    document.getElementsByClassName("works_button")[0].style =
      "background:rgba(96,74,138); color:white";
    document.getElementsByClassName("works_button")[1].style =
      "background:rgba(96,74,138); color:white";
    document.getElementsByClassName("works_button")[2].style =
      "background:white; color:rgba(96,74,138)";
  };

  render() {
    return (
      <Fragment>
        {this.state.desktop ? (
          <div className="Works_container" id="page3">
            <div className="Content_title">Works</div>
            <div className="Content_desc">
              <WorkItem contents={"fashub"} />
              <WorkItem contents={"portfoliov1"} />
              <WorkItem contents={"none"} />

            </div>
          </div>
        ) : (
          <div className="bar_Works_container" id="page3">
            <div className="bar_Content_title">Works</div>
            <div className="bar_Content_desc">
              <div className="button_container">
                <table>
                  <td
                    className="works_button"
                    onClick={this.modeChange1}
                    style={{ background: "white", color: "rgba(96,74,138)" }}
                  >
                    fashub
                  </td>
                  <td className="works_button" onClick={this.modeChange2}>
                    portfoliov1
                  </td>
                  <td className="works_button" onClick={this.modeChange3}>
                    none
                  </td>
                </table>
              </div>
              <WorkItem contents={this.state.mode} />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Works;
