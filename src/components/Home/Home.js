import React, { Component, Fragment } from "react";
import "./Home.css";

class Home extends Component {
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
          <div className="Home_container" id="pageHome">
            <div className="Home_desc">
              <div>Hello, o_o</div>
              <div>This Is My</div>
              <div>Front-end Portfolio </div>
              <div>v.1</div>
            </div>
          </div>
        ) : (
          <div className="Home_container" id="pageHome">
            <div className="bar_Home_desc">
              <div>Front-end</div>
              <div>Developer</div>
              <div>Kim Taeeun's</div>
              <div>Portfolio v.1</div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Home;
