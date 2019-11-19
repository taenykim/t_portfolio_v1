import React, { Component, Fragment } from 'react';
import "./Contact.css"

class Contact extends Component {
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
            <div className="Contact_container" id="page4">
              <div className="Contact_title">Contact</div>
              <div className="Contact_desc">
                <h1>김태은</h1>
                <div>Contact</div>
                <div>Page</div>
                <br/>
                <input/>
              </div>
            </div>
          ) : (
            <div className="Contact_container" id="page4">
              <div className="bar_Contact_title">Contact</div>
              <div className="bar_Contact_desc">
              <h2>김태은</h2>
                <div>프론트엔드 개발자</div>
                <div>UI 디자이너</div>

                <br/>
                <br/>
                <input/>
              </div>
            </div>
          )}
        </Fragment>
        );
    }
}

export default Contact;