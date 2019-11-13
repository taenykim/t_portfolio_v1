import React, { Component, Fragment } from 'react';

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
              <div className="Content_title">Contact</div>
              <div className="Content_desc">
                <div>This is</div>
                <div>Contact</div>
                <div>Page</div>
              </div>
            </div>
          ) : (
            <div className="Contact_container" id="page4">
              <div className="bar_Content_title">Contact</div>
              <div className="bar_Content_desc">
                <div>This is</div>
                <div>Contact</div>
                <div>Page</div>
              </div>
            </div>
          )}
        </Fragment>
        );
    }
}

export default Contact;