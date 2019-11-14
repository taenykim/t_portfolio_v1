import React, { Component, Fragment } from "react";
import "./About.css";

class About extends Component {
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
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    return (
      <Fragment>
        {this.state.desktop?(<div className="About_container" id="page1">
        <div className="About_title">ABOUT</div>
        <div className="About_desc">
         <h2>Think Harder</h2>
                <p>
                  영미권에서 자기소개서와 가장 의미가 비슷한 말을 뽑으라면
                  Personal statement라는 표현이 가장 적절하다. 의미상으로 자기
                  자신과 자기 자신의 경험에 대해 소개하는 내용으로 같은 의미가
                  되는 글을 이름 붙이자면 personal statement가 맞다.
            </p>
    
      </div></div>):(<div className="About_container" id="page1">
        <div className="bar_About_title">ABOUT</div>
        <div className="bar_About_desc">
        <h2>Think Harder</h2>
                <p>
                  영미권에서 자기소개서와 가장 의미가 비슷한 말을 뽑으라면
                  Personal statement라는 표현이 가장 적절하다. 의미상으로 자기
                  자신과 자기 자신의 경험에 대해 소개하는 내용으로 같은 의미가
                  되는 글을 이름 붙이자면 personal statement가 맞다.
            </p>
    
      </div></div>)}
      </Fragment>
    );
  }
}

export default About;
